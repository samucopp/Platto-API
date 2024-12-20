import productModel from "../../models/productModel.js";
import productCategoryModel from "../../models/productCategoryModel.js";
import error from "../../helpers/errors.js";

async function getAll() {
    const products = await productModel.findAll({
        include: productCategoryModel
    });
    return products;
};

async function getAllByCategory(category_id) {
    const products = await productModel.findAll({
        where: {
            category_id
        },
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

async function create(name_short, name, price, category_id, description, allergens) {
    const existingProduct = await productModel.findOne({
        where: {
            name_short: name_short
        }
    });
    if (existingProduct) {
        throw new error.PRODUCT_ALREADY_EXISTS();
    };
    const category = await productCategoryModel.findByPk(category_id);
    if (!category) {
        throw new error.PRODUCT_CATEGORY_NOT_FOUND();
    }
    const newProduct = await productModel.create({
        name_short,
        name,
        price,
        category_id,
        description,
        allergens,
        category: await productCategoryModel.findByPk(category_id)
    });
    return { ...newProduct.toJSON(), category };
};

async function update(id, name_short, name, price, category_id, description, allergens) {
    const product = await getById(id);
    const existingProduct = await productModel.findOne({
        where: {
            name_short: name_short
        }
    });
    if (existingProduct && existingProduct.id !== id && existingProduct.name_short !== name_short) {
        throw new error.PRODUCT_ALREADY_EXISTS();
    };
    const category = await productCategoryModel.findByPk(category_id);
    if (!category) {
        throw new error.PRODUCT_CATEGORY_NOT_FOUND();
    }
    product.name_short = name_short;
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
    getAllByCategory,
    getById,
    create,
    update,
    remove
}

export default functions;