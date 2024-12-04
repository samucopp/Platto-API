import productCategoryController from "./productCategoryController.js";

async function getAll(req, res) {
    try {
        const productCategories = await productCategoryController.getAll();
        res.status(200).json(productCategories);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

async function getOne(req, res) {
    try {
        const id = parseInt(req.params.id);
        const productCategory = await productCategoryController.getById(id);
        res.status(200).json(productCategory);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

async function create(req, res) {
    try {
        const { name } = req.body;
        const newProductCategory = await productCategoryController.create(name);
        res.status(201).json({productCategory:newProductCategory});
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
        const updatedProductCategory = await productCategoryController.update(id, name);
        res.status(200).json({productCategory:updatedProductCategory});
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
        const removedProductCategory = await productCategoryController.remove(id);
        res.status(200).json({productCategory:removedProductCategory});
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