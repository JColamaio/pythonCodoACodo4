require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Rutas API
app.use('/api/weather', require('./server/routes/weather'));

// Paginas
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/views/:page', (req, res) => {
    const page = req.params.page;
    res.sendFile(path.join(__dirname, 'views', page));
});

// 404
app.use((req, res) => {
    res.status(404).send('Pagina no encontrada');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
