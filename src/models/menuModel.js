import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";
import menuCategoryModel from "./menuCategoryModel.js";

const Menu = sequelize.define("Menu", {
    menu_id: {
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

export default Menu;

menuCategoryModel.hasMany(Menu, {foreignKey: 'category_id'});
Menu.belongsTo(menuCategoryModel, {foreignKey: 'category_id'});