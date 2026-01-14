# Resto en Serio

Proyecto final del curso Python Codo a Codo 4.0 Full Stack (GCBA).

Un sitio web para un restaurante con sistema de reservas, formulario de contacto, selector de sucursales con mapas integrados y un widget del clima que consulta una API externa.

## Stack

Frontend en HTML/CSS/JS vanilla con módulos ES6. Backend con Node.js y Express. Tests con Jest.

## Correr el proyecto

```bash
npm install
npm run dev
```

Abre en `http://localhost:3000`

Para producción: `npm start`

## Configuración del clima

El widget del clima necesita una API key de WeatherAPI (gratis en RapidAPI). Crear un `.env` con:

```
RAPIDAPI_KEY=tu_key
RAPIDAPI_HOST=weatherapi-com.p.rapidapi.com
```

Sin esto el sitio funciona igual, solo no muestra el clima.

## Tests

```bash
npm test
```
