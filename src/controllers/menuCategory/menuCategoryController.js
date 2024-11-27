import menuCategoryModel from "../../models/menuCategoryModel.js";

async function getAll() {
    const menuCategories = await menuCategoryModel.findAll();
    return menuCategories;
};

async function getById(id) {
    const menuCategory = await menuCategoryModel.findByPk(id);
    return menuCategory;
};

async function create(name) {
    const newMenuCategory = await menuCategoryModel.create({
        name
    });
    return newMenuCategory;
};

async function update(id, name) {
    const menuCategory = await menuCategoryModel.findByPk(id);
    menuCategory.name = name;
    await menuCategory.save();
    return menuCategory;
};

async function remove(id) {
    const menuCategoryToRemove = await menuCategoryModel.findByPk(id);
    await menuCategoryToRemove.destroy();
    return menuCategoryToRemove;
};

export const functions = {
    getAll,
    getById,
    create,
    update,
    remove
}

export default functions;