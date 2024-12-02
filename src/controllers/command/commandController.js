import commandModel from "../../models/commandModel.js";
import error from "../../helpers/errors.js";
import helper from "../../helpers/functions.js";
import productModel from "../../models/productModel.js"

async function getAll() {
    const commands = await commandModel.findAll();
    return commands;
};

async function getById(id) {
    const command = await commandModel.findByPk(id);
    return command;
};

async function create(table_id, user_id, pax, notes=null) {
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

async function update(id, date, status, table_id, user_id, pax, notes=null, discount=null) {
    const command = await commandModel.findByPk(id);
    if(!command) {
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
    if(notes){
        command.notes = notes;
    }
    if(discount) {
        command.discount = discount;
    }
    await command.save();
    return command;
};

async function remove(id) {
    const commandToRemove = await commandModel.findByPk(id);
    if(!commandToRemove) {
        throw new error.COMMAND_NOT_FOUND();
    }
    await commandToRemove.destroy();
    return commandToRemove;
};

/* async function addProducts(client_id,dish_id,quantity){
    const order = await getOrCreateOpenOrderByClient(client_id);
    const dish = order.dishes?.find(d =>d.dish_id===dish_id);
    let totalQuantity = quantity;
    if(dish){
        totalQuantity += dish.order_has_dish.quantity;
    }
    if(totalQuantity <= 0){
        await order.removeDish(dish_id);
    }else{
        await order.addDish(dish_id,{through:{quantity:totalQuantity}});
    }
    return order;
} */

export const functions = {
    getAll,
    getById,
    create,
    update,
    remove
}

export default functions;