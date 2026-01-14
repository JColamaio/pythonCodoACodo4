# Resto en Serio

Sitio web para un restaurante ficticio. Proyecto final del curso **Python Codo a Codo 4.0 Full Stack** del Gobierno de la Ciudad de Buenos Aires.

## Qué incluye

- Página principal con info del restaurante
- Menú de comidas
- Sistema de reservas con validación
- Formulario de contacto
- Selector de sucursales con mapas
- Widget de clima (API externa)

## Tecnologías

- **Frontend:** HTML, CSS, JavaScript vanilla (módulos ES6)
- **Backend:** Node.js + Express
- **Testing:** Jest + Supertest

## Requisitos

- Node.js 18 o superior

## Instalación

```bash
git clone https://github.com/tu-usuario/pythonCodoACodo4.git
cd pythonCodoACodo4
npm install
```

## Configuración

Crear un archivo `.env` en la raíz basándote en `.env.example`:

```
RAPIDAPI_KEY=tu_api_key_de_weatherapi
RAPIDAPI_HOST=weatherapi-com.p.rapidapi.com
PORT=3000
```

La API key se obtiene gratis en [RapidAPI - WeatherAPI](https://rapidapi.com/weatherapi/api/weatherapi-com).

## Cómo correr el proyecto

**Desarrollo (con hot reload):**
```bash
npm run dev
```

**Producción:**
```bash
npm start
```

El servidor arranca en `http://localhost:3000`

## Tests

```bash
npm test
```

## Estructura del proyecto

```
├── server.js           # Entry point del servidor
├── server/
│   ├── routes/         # Endpoints de la API
│   └── utils/          # Validadores y helpers
├── public/
│   ├── js/
│   │   └── modules/    # Módulos JS del frontend
│   ├── css/
│   └── img/
├── views/              # Páginas HTML
└── tests/              # Tests con Jest
```

## Licencia

MIT
