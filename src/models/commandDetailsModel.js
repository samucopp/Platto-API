import { DataTypes } from "sequelize";
import sequelize from "../../src/config/sequelize.js";


const CommandDetails = sequelize.define("Command_details", {
    command_id: {
        type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    product_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    quantity: {
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

export default CommandDetails;