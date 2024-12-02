import productModel from "../../models/productModel.js";
import productCategoryModel from "../../models/productCategoryModel.js";

async function getAll() {
    const products = await productModel.findAll({
        include: productCategoryModel
    });
    return products;
};

async function getById(id) {
    const product = await productModel.findByPk(id, {
        include: productCategoryModel
    });
    return product;
};

async function create(name, price, category_id, description, allergens) {
    const newProduct = await productModel.create({
        name,
        price,
        category_id,
        description,
        allergens
    });
    return newProduct;
};

async function update(id, name, price, category_id, description, allergens) {
    const product = await productModel.findByPk(id);
    product.name = name;
    product.price = price;
    product.category_id = category_id;
    product.description = description;
    product.allergens = allergens;
    await product.save();
    return product;
};

async function remove(id) {
    const productToRemove = await productModel.findByPk(id);
    await productToRemove.destroy();
    return productToRemove;
};

export const functions = {
    getAll,
    getById,
    create,
    update,
    remove
}

export default functions;