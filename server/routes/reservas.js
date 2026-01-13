const express = require('express');
const router = express.Router();
const { validateReservaForm } = require('../utils/validators');

const SUCURSALES_VALIDAS = ['Buenos Aires', 'La Plata', 'Quilmes', 'Berazategui'];
const HORARIOS_VALIDOS = ['1', '2', '3', '4'];
const PERSONAS_VALIDAS = ['1', '2', '3', '4'];

// POST /api/reservas - Validar formulario de reservas
router.post('/', (req, res) => {
    const { nombre, personas, sucursal, horario } = req.body;
    const errors = [];

    // Validar nombre
    const nombreResult = validateReservaForm({ nombre });
    if (!nombreResult.valid) {
        errors.push(...nombreResult.errors);
    }

    // Validar sucursal
    if (!sucursal || !SUCURSALES_VALIDAS.includes(sucursal)) {
        errors.push('Sucursal invalida');
    }

    // Validar personas
    if (!personas || !PERSONAS_VALIDAS.includes(String(personas))) {
        errors.push('Cantidad de personas invalida');
    }

    // Validar horario
    if (!horario || !HORARIOS_VALIDOS.includes(String(horario))) {
        errors.push('Horario invalido');
    }

    if (errors.length > 0) {
        return res.status(400).json({
            success: false,
            errors
        });
    }

    // Aqui se podria guardar en DB, enviar confirmacion, etc.
    res.json({
        success: true,
        message: 'Reserva confirmada'
    });
});

module.exports = router;
