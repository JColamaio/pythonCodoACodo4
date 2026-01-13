// Modulo Sucursales - Selector de mapas

const SUCURSALES_MAPS = {
    0: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d210146.68270007908!2d-58.573732241947475!3d-34.61574328954111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20CABA!5e0!3m2!1ses-419!2sar!4v1665357582086!5m2!1ses-419!2sar",
    1: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104686.07019244997!2d-58.02338348474164!3d-34.92050810703021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e62b1f0085a1%3A0xbcfc44f0547312e3!2sLa%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1665357808491!5m2!1ses-419!2sar",
    2: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52467.87097784745!2d-58.281825574109476!3d-34.72429556483409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32e38e45f5777%3A0x6a86dac21334524f!2sQuilmes%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1665357877692!5m2!1ses-419!2sar",
    3: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52443.46715259274!2d-58.23349972367625!3d-34.762728712306235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32f348c2fbdbf%3A0x80217bd276933f07!2sBerazategui%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1665357938953!5m2!1ses-419!2sar"
};

export function initSucursalesSelector() {
    const miSelector = document.getElementById("miSucursal");
    if (!miSelector) return;

    miSelector.addEventListener('change', cambiarIframe);
}

function cambiarIframe() {
    const miSelector = document.getElementById("miSucursal");
    const iframe = document.getElementById("miIframe");

    if (!miSelector || !iframe) return;

    const opcion = miSelector.selectedIndex;
    const mapUrl = SUCURSALES_MAPS[opcion];

    if (mapUrl) {
        iframe.setAttribute("src", mapUrl);
    }
}
