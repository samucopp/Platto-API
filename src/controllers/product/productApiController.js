import productController from "./productController.js";

async function getAll(req, res) {
    try {
    const products = await productController.getAll();
    res.status(200).json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

async function getOne(req, res) {
    try {
        const id = parseInt(req.params.id);
        const product = await productController.getById(id);
        res.status(200).json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

async function create(req, res) {
    try {
        const { name, price, category_id, description, allergens } = req.body;
        const newProduct = await productController.create(name, price, category_id, description, allergens);
        res.status(201).json({product:newProduct});
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
        const updatedProduct = await productController.update(id, name, price, category_id, description, allergens);
        res.status(200).json({product:updatedProduct});
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
        const removedProduct = await productController.remove(id);
        res.status(200).json({product:removedProduct});
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