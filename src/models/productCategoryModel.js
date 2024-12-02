import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";


const ProductCategory = sequelize.define("Product_category", {
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
        unique: true
    }
})

export default ProductCategory;