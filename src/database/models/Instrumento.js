const { Model, DataTypes} = require("sequelize"); // Import the built-in data type
const sequelize = require('../db');
class Instrumento extends Model {}

Instrumento.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    instrumento: {
        type: DataTypes.STRING
    },
    marca: {
        type: DataTypes.STRING
    },
    modelo: {
        type: DataTypes.STRING
    },
    imagen: {
        type: DataTypes.BLOB
    },
    precio: {
        type: DataTypes.INTEGER
    },
    costoEnvio: {
        type: DataTypes.STRING
    },
    cantidadVendida: {
        type: DataTypes.INTEGER
    },
    descripcion: {
        type: DataTypes.STRING
    }
}, { modelName: 'instrumento', sequelize, timestamps: false })
module.exports = Instrumento;

