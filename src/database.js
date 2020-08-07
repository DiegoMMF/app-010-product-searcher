/**
 * @fileoverview Inicialización de la conexión de MongoDB con mongoose
 * requerido por index.js
 */
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(console.log("Conexión Arriba.-"))