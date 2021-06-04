const express = require('express');
const app = express();
const apiRouter = require('./src/routes/api');
const port = 3001;
var cors = require('cors')
const sequelize = require('./src/database/db');

//const InstrumentoRoutes = require('./src/routes/api/instrumentoRoutes');
//app.use(InstrumentoRoutes);
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', apiRouter);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})

sequelize.sync({
    force: false
}).then(() => {
    console.log('Sincronizado con la base de datos');
}).catch(err => {
    console.log(`Error => ${err}`);
})