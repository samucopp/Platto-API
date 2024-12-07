import productCategoryModel from "../../models/productCategoryModel.js";
import ProductModel from "../../models/productModel.js";
import error from "../../helpers/errors.js";

async function getAll() {
    const productCategories = await productCategoryModel.findAll();
    return productCategories;
};

async function getById(id) {
    const productCategory = await productCategoryModel.findByPk(id);
    if (!productCategory) {
        throw new error.PRODUCT_CATEGORY_NOT_FOUND();
    }
    return productCategory;
};

async function create(name) {
    const oldProductCategory = await productCategoryModel.findOne({
        where: {
            name
        }
    });
    if (oldProductCategory) {
        throw new error.PRODUCT_CATEGORY_ALREADY_EXISTS();
    };
    const newProductCategory = await productCategoryModel.create({
        name
    });
    return newProductCategory;
};

async function update(id, name) {
    const productCategory = await getById(id);
    const oldProductCategory = await productCategoryModel.findOne({
        where: {
            name
        }
    });
    if (oldProductCategory) {
        throw new error.PRODUCT_CATEGORY_ALREADY_EXISTS();
    };
    productCategory.name = name;
    await productCategory.save();
    return productCategory;
};

async function remove(id) {
    const productCategoryToRemove = await getById(id);
    const productsInCategory = await ProductModel.findAll({
        where: {
            category_id: id
        }
    });
    if (productsInCategory.length > 0) {
        throw new error.PRODUCT_CATEGORY_IN_USE();
    }
    await productCategoryToRemove.destroy();
    return productCategoryToRemove;
};

export const functions = {
    getAll,
    getById,
    create,
    update,
    remove
}

export default functions;