import menuController from "./menuController.js";

async function getAll(req, res) {
    try {
    const menus = await menuController.getAll();
    res.status(200).json(menus);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

async function getOne(req, res) {
    try {
        const id = parseInt(req.params.id);
        const menu = await menuController.getById(id);
        if(!menu) {
            return res.status(404).json({error:"Menu not found"});
        }
        res.status(200).json(menu);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

async function create(req, res) {
    try {
        const { name, price, category_id, description, allergens } = req.body;
        const newMenu = await menuController.create(name, price, category_id, description, allergens);
        res.status(201).json({menu:newMenu});
    } catch (error) {
        console.log(error);
        if(error.status) {
            res.status(error.status);
        } else {
            res.status(500);
        }
        res.json({ error: error.message });
    }
};

async function update(req, res) {
    try {
        const id = parseInt(req.params.id);
        const { name, price, category_id, description, allergens } = req.body;
        const updatedMenu = await menuController.update(id, name, price, category_id, description, allergens);
        res.status(200).json({menu:updatedMenu});
    } catch (error) {
        console.log(error);
        if(error.status) {
            res.status(error.status);
        } else {
            res.status(500);
        }
        res.json({ error: error.message });
    }
};

async function remove(req, res) {
    try {
        const id = parseInt(req.params.id);
        const removedMenu = await menuController.remove(id);
        res.status(200).json({menu:removedMenu});
    } catch (error) {
        console.log(error);
        if(error.status) {
            res.status(error.status);
        } else {
            res.status(500);
        }
        res.json({ error: error.message });
    }
};

export const functions = {
    getAll,
    getOne,
    create,
    update,
    remove
}

export default functions;