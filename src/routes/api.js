const router = require('express').Router();
const apiInstrumentoRouter = require('./api/instrumentoRoutes');
router.use('/instrumento', apiInstrumentoRouter);

module.exports = router;