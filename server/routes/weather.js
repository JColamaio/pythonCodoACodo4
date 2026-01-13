const express = require('express');
const router = express.Router();

const VALID_LOCATIONS = ['Buenos Aires', 'La Plata', 'Quilmes', 'Berazategui'];

router.get('/:location', async (req, res) => {
    const { location } = req.params;

    if (!VALID_LOCATIONS.includes(location)) {
        return res.status(400).json({ error: 'Invalid location' });
    }

    const encodedLocation = encodeURIComponent(location);
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${encodedLocation}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
                'X-RapidAPI-Host': process.env.RAPIDAPI_HOST
            }
        });

        if (!response.ok) {
            throw new Error('Weather API error');
        }

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Weather API error:', error.message);
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
});

module.exports = router;
