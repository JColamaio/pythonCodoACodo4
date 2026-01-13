const request = require('supertest');
const app = require('../server');

describe('POST /api/reservas', () => {
    const reservaValida = {
        nombre: 'Maria',
        personas: '2',
        sucursal: 'Buenos Aires',
        horario: '1'
    };

    test('acepta reserva valida', async () => {
        const response = await request(app)
            .post('/api/reservas')
            .send(reservaValida);

        expect(response.status).toBe(200);
        expect(response.body.success).toBe(true);
        expect(response.body.message).toBe('Reserva confirmada');
    });

    test('rechaza nombre vacio', async () => {
        const response = await request(app)
            .post('/api/reservas')
            .send({ ...reservaValida, nombre: '' });

        expect(response.status).toBe(400);
        expect(response.body.errors).toContain('El nombre no puede estar vacio');
    });

    test('rechaza sucursal invalida', async () => {
        const response = await request(app)
            .post('/api/reservas')
            .send({ ...reservaValida, sucursal: 'Cordoba' });

        expect(response.status).toBe(400);
        expect(response.body.errors).toContain('Sucursal invalida');
    });

    test('rechaza personas invalidas', async () => {
        const response = await request(app)
            .post('/api/reservas')
            .send({ ...reservaValida, personas: '10' });

        expect(response.status).toBe(400);
        expect(response.body.errors).toContain('Cantidad de personas invalida');
    });

    test('rechaza horario invalido', async () => {
        const response = await request(app)
            .post('/api/reservas')
            .send({ ...reservaValida, horario: '99' });

        expect(response.status).toBe(400);
        expect(response.body.errors).toContain('Horario invalido');
    });

    test('acepta todas las sucursales validas', async () => {
        const sucursales = ['Buenos Aires', 'La Plata', 'Quilmes', 'Berazategui'];

        for (const sucursal of sucursales) {
            const response = await request(app)
                .post('/api/reservas')
                .send({ ...reservaValida, sucursal });

            expect(response.status).toBe(200);
        }
    });
});
