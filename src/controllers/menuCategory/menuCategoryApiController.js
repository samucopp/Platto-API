import menuCategoryController from "./menuCategoryController.js";

async function getAll(req, res) {
    try {
        const menuCategories = await menuCategoryController.getAll();
        res.status(200).json(menuCategories);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

async function getOne(req, res) {
    try {
        const id = parseInt(req.params.id);
        const menuCategory = await menuCategoryController.getById(id);
        if(!menuCategory) {
            return res.status(404).json({error:"Category not found"});
        }
        res.status(200).json(menuCategory);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

async function create(req, res) {
    try {
        const { name } = req.body;
        const newMenuCategory = await menuCategoryController.create(name);
        res.status(201).json({menuCategory:newMenuCategory});
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
        const { name } = req.body;
        const updatedMenuCategory = await menuCategoryController.update(id, name);
        res.status(200).json({menuCategory:updatedMenuCategory});
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
        const removedMenuCategory = await menuCategoryController.remove(id);
        res.status(200).json({menuCategory:removedMenuCategory});
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