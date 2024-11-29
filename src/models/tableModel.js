import { DataTypes } from "sequelize";
import sequelize from "../../src/config/sequelize.js";


const Table = sequelize.define("Table", {
    table_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    capacity: {
        type: DataTypes.SMALLINT.UNSIGNED,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('disponible', 'ocupada'),
        allowNull: false,
        defaultValue: 'disponible'
    }
})

export default Table;