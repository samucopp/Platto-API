import productCategoryModel from "../../models/productCategoryModel.js";

async function getAll() {
    const productCategories = await productCategoryModel.findAll();
    return productCategories;
};

async function getById(id) {
    const productCategory = await productCategoryModel.findByPk(id);
    return productCategory;
};

async function create(name) {
    const newProductCategory = await productCategoryModel.create({
        name
    });
    return newProductCategory;
};

async function update(id, name) {
    const productCategory = await productCategoryModel.findByPk(id);
    productCategory.name = name;
    await productCategory.save();
    return productCategory;
};

async function remove(id) {
    const productCategoryToRemove = await productCategoryModel.findByPk(id);
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