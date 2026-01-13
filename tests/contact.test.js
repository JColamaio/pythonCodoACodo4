const request = require('supertest');
const app = require('../server');

describe('POST /api/contact', () => {
    const formValido = {
        email: 'juan@gmail.com',
        nombre: 'Juan',
        apellido: 'Perez',
        comentario: 'Este es un comentario valido de prueba'
    };

    test('acepta formulario valido', async () => {
        const response = await request(app)
            .post('/api/contact')
            .send(formValido);

        expect(response.status).toBe(200);
        expect(response.body.success).toBe(true);
    });

    test('rechaza email invalido', async () => {
        const response = await request(app)
            .post('/api/contact')
            .send({ ...formValido, email: 'invalido' });

        expect(response.status).toBe(400);
        expect(response.body.success).toBe(false);
        expect(response.body.errors).toContain('El formato de mail es incorrecto');
    });

    test('rechaza nombre vacio', async () => {
        const response = await request(app)
            .post('/api/contact')
            .send({ ...formValido, nombre: '' });

        expect(response.status).toBe(400);
        expect(response.body.errors).toContain('El nombre no puede estar vacio');
    });

    test('rechaza comentario muy corto', async () => {
        const response = await request(app)
            .post('/api/contact')
            .send({ ...formValido, comentario: 'corto' });

        expect(response.status).toBe(400);
        expect(response.body.errors).toContain('El comentario debe tener al menos 10 caracteres');
    });

    test('retorna multiples errores', async () => {
        const response = await request(app)
            .post('/api/contact')
            .send({
                email: '',
                nombre: '',
                apellido: '',
                comentario: ''
            });

        expect(response.status).toBe(400);
        expect(response.body.errors.length).toBe(4);
    });
});
