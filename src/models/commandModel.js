import { DataTypes } from "sequelize";
import sequelize from "../../src/config/sequelize.js";
import tableModel from "./tableModel.js";
import userModel from "./userModel.js";
import menuModel from "./menuModel.js";
import commandDetailsModel from "./commandDetailsModel.js";

const Command = sequelize.define("Command", {
    command_id: {
        type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    time: {
        type: DataTypes.ENUM('comida', 'cena'),
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('en preparacion', 'servido'),
        allowNull: false,
        defaultValue: 'en preparacion'
    },
    table_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    notes: {
        type: DataTypes.STRING,
        allowNull: true
    },
    discount: {
        type: DataTypes.SMALLINT.UNSIGNED,
        allowNull: true
    }
})

export default Command;

tableModel.hasMany(Command, {foreignKey: 'table_id'});
Command.belongsTo(tableModel, {foreignKey: 'table_id'});

userModel.hasMany(Command, {foreignKey: 'user_id'});
Command.belongsTo(userModel, {foreignKey: 'user_id'});

Command.belongsToMany(menuModel, {through: commandDetailsModel, foreignKey: 'command_id'});
menuModel.belongsToMany(Command, {through: commandDetailsModel, foreignKey: 'menu_id'});