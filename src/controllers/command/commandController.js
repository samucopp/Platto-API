import commandModel from "../../models/commandModel.js";
import error from "../../helpers/errors.js";

async function getAll() {
    const commands = await commandModel.findAll();
    return commands;
};

async function getById(id) {
    const command = await commandModel.findByPk(id);
    return command;
};

async function create(date, time, status, table_id, user_id, pax, notes=null, discount=null) {
    const command = await commandModel.create({
        date,
        time,
        status,
        table_id,
        user_id,
        pax,
        notes,
        discount
    });
    return command;
};

async function update(id, date, time, status, table_id, user_id, pax, notes=null, discount=null) {
    const command = await commandModel.findByPk(id);
    if(!command) {
        throw new error.COMMAND_NOT_FOUND();
    }
    command.date = date;
    command.time = time;
    command.status = status;
    command.table_id = table_id;
    command.user_id = user_id;
    command.pax = pax;
    command.notes = notes;
    command.discount = discount;
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

export const functions = {
    getAll,
    getById,
    create,
    update,
    remove
}

export default functions;