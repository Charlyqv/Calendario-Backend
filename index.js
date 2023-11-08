const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config();

// Crear servidor de express
const app = express();

// Base de datos
dbConnection();

// Directorio Público
app.use( express.static('public') );

// Lectura y parseo del body
app.use( express.json() );

// Rutas
app.use('/api/auth', require('./routes/auth'));

// Escuchar perticiones
app.listen( process.env.PORT , () => {
  console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
})