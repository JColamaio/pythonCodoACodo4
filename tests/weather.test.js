const request = require('supertest');
const app = require('../server');

// Mock de fetch global
global.fetch = jest.fn();

describe('GET /api/weather/:location', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    const mockWeatherResponse = {
        location: { name: 'Buenos Aires' },
        current: { temp_c: 25, condition: { text: 'Sunny' } }
    };

    test('retorna 400 para location invalida', async () => {
        const response = await request(app)
            .get('/api/weather/InvalidCity');

        expect(response.status).toBe(400);
        expect(response.body).toEqual({ error: 'Invalid location' });
    });

    test('acepta Buenos Aires como location valida', async () => {
        global.fetch.mockResolvedValueOnce({
            ok: true,
            json: () => Promise.resolve(mockWeatherResponse)
        });

        const response = await request(app)
            .get('/api/weather/Buenos%20Aires');

        expect(response.status).toBe(200);
        expect(global.fetch).toHaveBeenCalledTimes(1);
    });

    test('acepta La Plata como location valida', async () => {
        global.fetch.mockResolvedValueOnce({
            ok: true,
            json: () => Promise.resolve(mockWeatherResponse)
        });

        const response = await request(app)
            .get('/api/weather/La%20Plata');

        expect(response.status).toBe(200);
    });

    test('acepta Quilmes como location valida', async () => {
        global.fetch.mockResolvedValueOnce({
            ok: true,
            json: () => Promise.resolve(mockWeatherResponse)
        });

        const response = await request(app)
            .get('/api/weather/Quilmes');

        expect(response.status).toBe(200);
    });

    test('acepta Berazategui como location valida', async () => {
        global.fetch.mockResolvedValueOnce({
            ok: true,
            json: () => Promise.resolve(mockWeatherResponse)
        });

        const response = await request(app)
            .get('/api/weather/Berazategui');

        expect(response.status).toBe(200);
    });

    test('retorna 500 si la API externa falla', async () => {
        global.fetch.mockResolvedValueOnce({
            ok: false
        });

        const response = await request(app)
            .get('/api/weather/Buenos%20Aires');

        expect(response.status).toBe(500);
        expect(response.body).toEqual({ error: 'Failed to fetch weather data' });
    });

    test('retorna 500 si fetch lanza excepcion', async () => {
        global.fetch.mockRejectedValueOnce(new Error('Network error'));

        const response = await request(app)
            .get('/api/weather/Buenos%20Aires');

        expect(response.status).toBe(500);
        expect(response.body).toEqual({ error: 'Failed to fetch weather data' });
    });

    test('retorna datos del clima correctamente', async () => {
        global.fetch.mockResolvedValueOnce({
            ok: true,
            json: () => Promise.resolve(mockWeatherResponse)
        });

        const response = await request(app)
            .get('/api/weather/Buenos%20Aires');

        expect(response.status).toBe(200);
        expect(response.body).toEqual(mockWeatherResponse);
    });
});

describe('Rutas generales', () => {
    test('GET / retorna index.html', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
    });

    test('GET /ruta-inexistente retorna 404', async () => {
        const response = await request(app).get('/ruta-que-no-existe');
        expect(response.status).toBe(404);
    });
});
