import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";


const User = sequelize.define("User", {
    user_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    user_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.ENUM('camarero', 'cocinero', 'admin'),
        allowNull: false
    }
})

export default User;