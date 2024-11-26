import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";


const MenuCategory = sequelize.define("Menu_category", {
    category_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

export default MenuCategory;