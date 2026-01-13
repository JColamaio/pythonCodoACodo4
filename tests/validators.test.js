const {
    validateNombre,
    validateEmail,
    validateComentario,
    validateContactForm,
    validateReservaForm
} = require('../server/utils/validators');

describe('validateNombre', () => {
    test('retorna error si nombre esta vacio', () => {
        expect(validateNombre('')).toEqual({
            valid: false,
            error: 'El nombre no puede estar vacio'
        });
    });

    test('retorna error si nombre es null', () => {
        expect(validateNombre(null)).toEqual({
            valid: false,
            error: 'El nombre no puede estar vacio'
        });
    });

    test('retorna error si nombre tiene numeros', () => {
        expect(validateNombre('Juan123')).toEqual({
            valid: false,
            error: 'El nombre solo puede tener letras y espacios'
        });
    });

    test('retorna error si nombre tiene caracteres especiales', () => {
        expect(validateNombre('Juan@Perez')).toEqual({
            valid: false,
            error: 'El nombre solo puede tener letras y espacios'
        });
    });

    test('acepta nombre valido con espacios', () => {
        expect(validateNombre('Juan Perez')).toEqual({ valid: true });
    });

    test('acepta nombre con acentos', () => {
        expect(validateNombre('María José')).toEqual({ valid: true });
    });

    test('acepta nombre simple', () => {
        expect(validateNombre('Carlos')).toEqual({ valid: true });
    });
});

describe('validateEmail', () => {
    test('retorna error si email esta vacio', () => {
        expect(validateEmail('')).toEqual({
            valid: false,
            error: 'El email no puede estar vacio'
        });
    });

    test('retorna error si email es null', () => {
        expect(validateEmail(null)).toEqual({
            valid: false,
            error: 'El email no puede estar vacio'
        });
    });

    test('retorna error si email no tiene @', () => {
        expect(validateEmail('juangmail.com')).toEqual({
            valid: false,
            error: 'El formato de mail es incorrecto'
        });
    });

    test('retorna error si email no tiene dominio', () => {
        expect(validateEmail('juan@')).toEqual({
            valid: false,
            error: 'El formato de mail es incorrecto'
        });
    });

    test('acepta email valido', () => {
        expect(validateEmail('juan@gmail.com')).toEqual({ valid: true });
    });

    test('acepta email con subdominios', () => {
        expect(validateEmail('juan.perez@empresa.com.ar')).toEqual({ valid: true });
    });

    test('acepta email con guiones y puntos', () => {
        expect(validateEmail('juan-perez_123@mi-empresa.com')).toEqual({ valid: true });
    });
});

describe('validateComentario', () => {
    test('retorna error si comentario es muy corto', () => {
        expect(validateComentario('Hola')).toEqual({
            valid: false,
            error: 'El comentario debe tener al menos 10 caracteres'
        });
    });

    test('retorna error si comentario esta vacio', () => {
        expect(validateComentario('')).toEqual({
            valid: false,
            error: 'El comentario debe tener al menos 10 caracteres'
        });
    });

    test('acepta comentario con 10 caracteres', () => {
        expect(validateComentario('1234567890')).toEqual({ valid: true });
    });

    test('acepta comentario largo', () => {
        expect(validateComentario('Este es un comentario mas largo')).toEqual({ valid: true });
    });

    test('respeta minLength personalizado', () => {
        expect(validateComentario('abc', 5)).toEqual({
            valid: false,
            error: 'El comentario debe tener al menos 5 caracteres'
        });
    });
});

describe('validateContactForm', () => {
    const formValido = {
        email: 'juan@gmail.com',
        nombre: 'Juan',
        apellido: 'Perez',
        comentario: 'Este es un comentario valido'
    };

    test('acepta formulario completo valido', () => {
        expect(validateContactForm(formValido)).toEqual({
            valid: true,
            errors: []
        });
    });

    test('retorna errores multiples', () => {
        const result = validateContactForm({
            email: '',
            nombre: '',
            apellido: '',
            comentario: ''
        });
        expect(result.valid).toBe(false);
        expect(result.errors.length).toBe(4);
    });

    test('retorna error solo para campos invalidos', () => {
        const result = validateContactForm({
            ...formValido,
            email: 'invalido'
        });
        expect(result.valid).toBe(false);
        expect(result.errors).toContain('El formato de mail es incorrecto');
    });
});

describe('validateReservaForm', () => {
    test('acepta reserva con nombre valido', () => {
        expect(validateReservaForm({ nombre: 'Maria' })).toEqual({
            valid: true,
            errors: []
        });
    });

    test('rechaza reserva sin nombre', () => {
        expect(validateReservaForm({ nombre: '' })).toEqual({
            valid: false,
            errors: ['El nombre no puede estar vacio']
        });
    });
});
