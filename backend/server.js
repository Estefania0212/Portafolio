// backend/server.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware para parsear JSON
app.use(express.json());

// Endpoint de ejemplo: GET /api/saludo
app.get('/api/saludo', (req, res) => {
  res.json({ mensaje: '¡Hola desde el servidor Express!' });
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
