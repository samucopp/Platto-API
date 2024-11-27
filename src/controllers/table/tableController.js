import tableModel from "../../models/tableModel.js";

async function getAll() {
    const tables = await tableModel.findAll();
    return tables;
};

async function getById(id) {
    const table = await tableModel.findByPk(id);
    return table;
};

async function create(capacity) {
    const newTable = await tableModel.create({
        capacity
    });
    return newTable;
};

async function update(id, capacity) {
    const table = await tableModel.findByPk(id);
    table.capacity = capacity;
    await table.save();
    return table;
};

async function remove(id) {
    const tableToRemove = await tableModel.findByPk(id);
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