import menuModel from "../../models/menuModel.js";
import menuCategoryModel from "../../models/menuCategoryModel.js";

async function getAll() {
    const menus = await menuModel.findAll({
        include: menuCategoryModel
    });
    return menus;
};

async function getById(id) {
    const menu = await menuModel.findByPk(id, {
        include: menuCategoryModel
    });
    return menu;
};

async function create(name, price, category_id, description, allergens) {
    const newMenu = await menuModel.create({
        name,
        price: price*100,
        category_id,
        description,
        allergens
    });
    return newMenu;
};

async function update(id, name, price, category_id, description, allergens) {
    const menu = await menuModel.findByPk(id);
    menu.name = name;
    menu.price = price*100;
    menu.category_id = category_id;
    menu.description = description;
    menu.allergens = allergens;
    await menu.save();
    return menu;
};

async function remove(id) {
    const menuToRemove = await menuModel.findByPk(id);
    await menuToRemove.destroy();
    return menuToRemove;
};

export const functions = {
    getAll,
    getById,
    create,
    update,
    remove
}

export default functions;