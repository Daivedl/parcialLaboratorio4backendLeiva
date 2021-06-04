var Instrumento = require('../database/models/Instrumento');

const createOne = (req, res) => {
    Instrumento.create({
        instrumento: req.body.instrumento,
        marca: req.body.marca,
        modelo: req.body.modelo,
        imagen: req.body.imagen,
        precio: req.body.precio,
        costoEnvio: req.body.costoEnvio,
        cantidadVendida: req.body.cantidadVendida,
        descripcion: req.body.descripcion
    }).then(result => {res.json(result)});
}
const getAll = (req, res) => {
    Instrumento.findAll().then(result => {res.json(result)});
}
const getOne = (req, res) => {
    Instrumento.findByPk(req.params.id).then(result => {res.json(result)});
}
const edit = (req, res) => {
    Instrumento.update({
        instrumento: req.body.instrumento,
        marca: req.body.marca,
        modelo: req.body.modelo,
        imagen: req.body.imagen,
        precio: req.body.precio,
        costoEnvio: req.body.costoEnvio,
        cantidadVendida: req.body.cantidadVendida,
        descripcion: req.body.descripcion
    }, {
        where: {
            id: req.params.id
        }
    }).then(result => {res.json(result)});
}
const deleteById = (req, res) => {
    Instrumento.destroy({
        where: {
            id: req.params.id
        }
    }).then(result => {res.json(result)});
}

module.exports = {
    createOne,
    getAll,
    getOne,
    edit,
    deleteById
}