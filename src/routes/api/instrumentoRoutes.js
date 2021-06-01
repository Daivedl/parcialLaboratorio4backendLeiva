const express = require('express');
const router = express.Router();
var instrumentoController = require('../../controllers/instrumentoController.js');

router.post('/create', instrumentoController.createOne)
router.get('/', instrumentoController.getAll);
router.get('/:id', instrumentoController.getOne);
router.put('/edit/:id', instrumentoController.edit);
router.delete('/delete/:id', instrumentoController.deleteById);

module.exports = router;