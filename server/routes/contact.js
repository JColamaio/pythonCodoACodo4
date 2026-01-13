const express = require('express');
const router = express.Router();
const { validateContactForm } = require('../utils/validators');

// POST /api/contact - Validar formulario de contacto
router.post('/', (req, res) => {
    const { email, nombre, apellido, comentario } = req.body;

    const result = validateContactForm({ email, nombre, apellido, comentario });

    if (!result.valid) {
        return res.status(400).json({
            success: false,
            errors: result.errors
        });
    }

    // Aqui se podria enviar email, guardar en DB, etc.
    res.json({
        success: true,
        message: 'Mensaje recibido correctamente'
    });
});

module.exports = router;
