const express = require('express');
const cors    = require('cors');
const app     = express();

app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:4173'],
  methods: ['GET', 'POST'],
}));
app.use(express.json());

app.use('/api/contacto',      require('./routes/contactoRoutes'));
app.use('/api/reclamaciones', require('./routes/reclamacionRoutes'));

module.exports = app;
