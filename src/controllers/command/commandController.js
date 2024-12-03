import commandModel from "../../models/commandModel.js";
import error from "../../helpers/errors.js";
import helper from "../../helpers/functions.js";
import productModel from "../../models/productModel.js"
import userModel from "../../models/userModel.js"
import { get } from "mongoose";
import ProductCategoryModel from "../../models/productCategoryModel.js";
import historyModel from "../../models/historyModel.js";

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
        }
    return commands;
};

async function getHistory() {
    const commands = await historyModel.find();
    return commands;
}

async function getById(id) {
    const command = await commandModel.findByPk(id);
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
    if (clean) {
    const cleanCommand = helper.cleanData(command);
    return cleanCommand;
    }
    return command;
};

async function create(table_id, user_id, pax, notes = null) {
    const date = new Date();
    const newTime = helper.selectDayOrNight(date);
    const command = await commandModel.create({
        time: newTime,
        table_id,
        user_id,
        pax,
        notes
    });
    return command;
};

async function update(id, date, status, table_id, user_id, pax, notes = null, discount = null) {
    const command = await commandModel.findByPk(id);
    if (!command) {
        throw new error.COMMAND_NOT_FOUND();
    }
    command.date = date;
    const newDate = new Date(date);
    const newTime = helper.selectDayOrNight(newDate);
    command.time = newTime;
    command.status = status;
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
    const commandToRemove = await commandModel.findByPk(id);
    if (!commandToRemove) {
        throw new error.COMMAND_NOT_FOUND();
    }
    await commandToRemove.destroy();
    return commandToRemove;
};

async function closeCommand(command_id) {
    const command = await getById(command_id);
    if (!command) {
        throw new error.COMMAND_NOT_FOUND();
    }
    command.status = "servido";
    await command.save();
    const commandToSave = await getByIdFull(command_id, true);
    await historyModel.create(commandToSave);
    return command;
}

async function addProduct(command_id, product_id, quantity) {
    const command = await getByIdFull(command_id);
    const product = command.Products?.find(p => p.product_id === product_id);
    let totalQuantity = quantity;
    if (product) {
        totalQuantity += product.Command_details.quantity;
    }
    await command.addProduct(product_id, { through: { quantity: totalQuantity } });
    return command;
};

async function removeProduct(command_id, product_id) {
    const command = await getByIdFull(command_id);
    await command.removeProduct(product_id);
    return command;
};

async function updateProduct(command_id, product_id, quantity) {
    const command = await getByIdFull(command_id);
    await command.addProduct(product_id, { through: { quantity: quantity } });
    return command;
};


export const functions = {
    getAll,
    getFullAll,
    getHistory,
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