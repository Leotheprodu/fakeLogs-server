const { sequelize } = require('../../config/mysql');
const { DataTypes } = require('sequelize');

const Users = sequelize.define(
    'users',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },

        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ip: {
            type: DataTypes.STRING,
        },
    },
    {
        timestamps: true,
    }
);

/**
 * Implementando Modelo Personalizado
 */

module.exports = Users;
