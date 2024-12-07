import commandModel from "../../models/commandModel.js";
import error from "../../helpers/errors.js";
import helper from "../../helpers/functions.js";
import productModel from "../../models/productModel.js";
import userModel from "../../models/userModel.js";
import ProductCategoryModel from "../../models/productCategoryModel.js";
import historyModel from "../../models/historyModel.js";
import tableModel from "../../models/tableModel.js";

async function getAll() {
    const commands = await commandModel.findAll();
    return commands;
};

async function getFullAll(clean = true) {
    const commands = await commandModel.findAll({
        include: [
            {
                model: productModel,
                include: ProductCategoryModel
            },
            userModel]
    });
    if (clean) {
        return commands.map(command => helper.cleanData(command));
    };
    return commands;
};

async function getHistory() {
    const commands = await historyModel.find();
    return commands;
}

async function getHistoryById(id) {
    const command = await historyModel.findOne({
        command_id: id
    });
    if (!command) {
        throw new error.COMMAND_NOT_FOUND();
    };
    return command;
}

async function getById(id) {
    const command = await commandModel.findByPk(id);
    if (!command) {
        throw new error.COMMAND_NOT_FOUND();
    };
    return command;
};

async function getByIdFull(id, clean = false) {
    const command = await commandModel.findByPk(id, {
        include: [
            {
                model: productModel,
                include: ProductCategoryModel
            },
            userModel]
    });
    if (!command) {
        throw new error.COMMAND_NOT_FOUND();
    };
    if (clean) {
    const cleanCommand = helper.cleanData(command);
    return cleanCommand;
    };
    return command;
};

async function create(table_id, user_id, pax, notes = null, discount = null) {
    const date = new Date();
    const newTime = helper.selectDayOrNight(date);
    const table = await tableModel.findOne({
        where: {
            table_id: table_id
        }
    });
    if (!table) {
        throw new error.TABLE_NOT_FOUND();
    };
    if (pax > table.capacity) {
        throw new error.EXCEEDS_TABLE_CAPACITY();
    };
    const oldCommand = await commandModel.findOne({
        where: {
            table_id,
            status: "en preparacion"
        }
    });
    if (oldCommand) {
        throw new error.TABLE_ALREADY_IN_USE();
    };
    const command = await commandModel.create({
        time: newTime,
        table_id,
        user_id,
        pax,
        notes,
        discount
    });
    return command;
};

async function update(id, date, table_id, user_id, pax, notes = null, discount = null) {
    const table = await tableModel.findOne({
        where: {
            table_id: table_id
        }
    });
    if (!table) {
        throw new error.TABLE_NOT_FOUND();
    };
    if (pax > table.capacity) {
        throw new error.EXCEEDS_TABLE_CAPACITY();
    };
    const oldCommand = await commandModel.findOne({
        where: {
            table_id: table_id
        }
    });
    if (oldCommand && oldCommand.command_id !== id) {
        throw new error.TABLE_ALREADY_IN_USE();
    };
    const command = await getById(id);
    command.date = date;
    const newDate = new Date(date);
    const newTime = helper.selectDayOrNight(newDate);
    command.time = newTime;
    command.table_id = table_id;
    command.user_id = user_id;
    command.pax = pax;
    if (notes) {
        command.notes = notes;
    }
    if (discount) {
        command.discount = discount;
    }
    await command.save();
    return command;
};

async function remove(id) {
    const commandToRemove = await getById(id);
    await commandToRemove.destroy();
    return commandToRemove;
};

async function closeCommand(command_id) {
    const command = await getById(command_id);
    command.status = "servido";
    await command.save();
    const commandToSave = await getByIdFull(command_id, true);
    await historyModel.create(commandToSave);
    await command.destroy();
    return command;
}

async function addProduct(command_id, product_id, quantity) {
    const command = await getByIdFull(command_id);
    const product = command.Products?.find(p => p.product_id === product_id);
    let totalQuantity = quantity;
    if (product) {
        totalQuantity += product.Command_details.quantity;
    };
    await command.addProduct(product_id, { through: { quantity: totalQuantity } });
    const cleanCommand = helper.cleanData(command);
    return cleanCommand;
};

async function removeProduct(command_id, product_id) {
    const command = await getByIdFull(command_id);
    await command.removeProduct(product_id);
    return command;
};

async function updateProduct(command_id, product_id, quantity) {
    const command = await getByIdFull(command_id);
    await command.addProduct(product_id, { through: { quantity: quantity } });
    const cleanCommand = helper.cleanData(command);
    return cleanCommand;
};


export const functions = {
    getAll,
    getFullAll,
    getHistory,
    getHistoryById,
    getById,
    getByIdFull,
    create,
    update,
    remove,
    closeCommand,
    addProduct,
    removeProduct,
    updateProduct
}

export default functions;