import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";
import productCategoryModel from "./productCategoryModel.js";

const Product = sequelize.define("Product", {
    product_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    category_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    allergens: {
        type: DataTypes.STRING,
        allowNull: true
    }
})

export default Product;

productCategoryModel.hasMany(Product, {foreignKey: 'category_id'});
Product.belongsTo(productCategoryModel, {foreignKey: 'category_id'});