import { parse } from "micromatch";
import menuController from "./menuController.js";

async function getAll(req, res) {
    const menus = await menuController.getAll();
    res.json(menus);
};

async function getOne(req, res) {
    const id = parseInt(req.params.id);
    const menu = await menuController.getById(id);
    res.json(menu);
};

async function create(req, res) {
    const { name, price, category_id, description, allergens } = req.body;
    const newMenu = await menuController.create(name, price, category_id, description, allergens);
    res.json({menu:newMenu});
};

async function update(req, res) {
    const id = parseInt(req.params.id);
    const { name, price, category_id, description, allergens } = req.body;
    const updatedMenu = await menuController.update(id, name, price, category_id, description, allergens);
    res.json({menu:updatedMenu});
};

async function remove(req, res) {
    const id = parseInt(req.params.id);
    const removedMenu = await menuController.remove(id);
    res.json({menu:removedMenu});
};

export const functions = {
    getAll,
    getOne,
    create,
    update,
    remove
}

export default functions;