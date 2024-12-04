import productModel from "../../models/productModel.js";
import productCategoryModel from "../../models/productCategoryModel.js";
import error from "../../helpers/errors.js";

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
    if (!product) {
        throw new error.PRODUCT_NOT_FOUND();
    };
    return product;
};

async function create(name, price, category_id, description, allergens) {
    const existingProduct = await productModel.findOne({
        where: {
            name: name
        }
    });
    if (existingProduct) {
        throw new error.PRODUCT_ALREADY_EXISTS();
    };
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
    const product = await getById(id);
    const existingProduct = await productModel.findOne({
        where: {
            name: name
        }
    });
    if (existingProduct) {
        throw new error.PRODUCT_ALREADY_EXISTS();
    };
    product.name = name;
    product.price = price;
    product.category_id = category_id;
    product.description = description;
    product.allergens = allergens;
    await product.save();
    return product;
};

async function remove(id) {
    const productToRemove = await getById(id);
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