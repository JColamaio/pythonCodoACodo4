// Validaciones compartidas (server + client side)

const patterns = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
};

function validateNombre(nombre) {
    if (!nombre || nombre.length === 0) {
        return { valid: false, error: 'El nombre no puede estar vacio' };
    }
    if (!patterns.nombre.test(nombre)) {
        return { valid: false, error: 'El nombre solo puede tener letras y espacios' };
    }
    return { valid: true };
}

function validateEmail(email) {
    if (!email || email.length === 0) {
        return { valid: false, error: 'El email no puede estar vacio' };
    }
    if (!patterns.correo.test(email)) {
        return { valid: false, error: 'El formato de mail es incorrecto' };
    }
    return { valid: true };
}

function validateComentario(comentario, minLength = 10) {
    if (!comentario || comentario.length < minLength) {
        return { valid: false, error: `El comentario debe tener al menos ${minLength} caracteres` };
    }
    return { valid: true };
}

function validateContactForm(data) {
    const errors = [];

    const emailResult = validateEmail(data.email);
    if (!emailResult.valid) errors.push(emailResult.error);

    const nombreResult = validateNombre(data.nombre);
    if (!nombreResult.valid) errors.push(nombreResult.error);

    const apellidoResult = validateNombre(data.apellido);
    if (!apellidoResult.valid) errors.push(apellidoResult.error.replace('nombre', 'apellido'));

    const comentarioResult = validateComentario(data.comentario);
    if (!comentarioResult.valid) errors.push(comentarioResult.error);

    return {
        valid: errors.length === 0,
        errors
    };
}

function validateReservaForm(data) {
    const errors = [];

    const nombreResult = validateNombre(data.nombre);
    if (!nombreResult.valid) errors.push(nombreResult.error);

    return {
        valid: errors.length === 0,
        errors
    };
}

module.exports = {
    patterns,
    validateNombre,
    validateEmail,
    validateComentario,
    validateContactForm,
    validateReservaForm
};
