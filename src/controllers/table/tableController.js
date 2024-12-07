import tableModel from "../../models/tableModel.js";
import error from "../../helpers/errors.js";

async function getAll() {
    const tables = await tableModel.findAll();
    return tables;
};

async function getById(id) {
    const table = await tableModel.findByPk(id);
    if (!table) {
        throw new error.TABLE_NOT_FOUND();
    };
    return table;
};

async function create(capacity) {
    if (typeof capacity !== 'number' || capacity <= 0) {
        throw new error.INVALID_DATA();
    };
    const newTable = await tableModel.create({
        capacity
    });
    return newTable;
};

async function update(id, capacity) {
    const table = await getById(id);
    if (typeof capacity !== 'number' || capacity <= 0) {
        throw new error.INVALID_DATA();
    };
    table.capacity = capacity;
    await table.save();
    return table;
};

async function remove(id) {
    const tableToRemove = await getById(id);
    if (tableToRemove.status === 'ocupada') {
        throw new error.TABLE_IN_USE();
    }
    await tableToRemove.destroy();
    return tableToRemove;
};

export const functions = {
    getAll,
    getById,
    create,
    update,
    remove
}

export default functions;