// Weather API - Now using backend proxy for security

var miSelect = document.getElementById("miSucursal");
miSelect.addEventListener("change", buscarClima);

var miUbicacion = document.getElementById("miIframe");
miUbicacion.addEventListener("load", buscarClima);

function buscarClima() {
    var miSelectorTemp = document.getElementById("miSucursal");
    var opcion = miSelectorTemp.selectedIndex;
    var miLocalidad = "";

    switch (opcion) {
        case 0:
            miLocalidad = "Buenos Aires";
            break;
        case 1:
            miLocalidad = "La Plata";
            break;
        case 2:
            miLocalidad = "Quilmes";
            break;
        case 3:
            miLocalidad = "Berazategui";
            break;
        default:
            miLocalidad = "Buenos Aires";
            break;
    }

    // Call our backend instead of external API directly
    fetch("/api/weather/" + encodeURIComponent(miLocalidad))
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((response) => completarClima(response))
        .catch((err) => console.error("Error fetching weather:", err));
}

function completarClima(response) {
    var miImagenClima = document.getElementById("miImagenClima");
    var miImagen = response.current.condition.icon;
    var miClimaActual = document.getElementById("miClimaActual");

    miImagenClima.setAttribute("src", miImagen);
    miClimaActual.textContent =
        response.location.name + " " + response.current.temp_c + "°";
}
