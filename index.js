const express = require('express');
require('dotenv').config();

// Crear servidor de express
const app = express();

// Directorio Público
app.use( express.static('public') );

// Rutas
// app.get('/', (req, res) => {

//   console.log('Se requiere el /');
//   res.json({
//     ok: true
//   });

// })


// Escuchar perticiones
app.listen( process.env.PORT , () => {
  console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
})