//API REST Clima(Weatherbit)


var miSelect = document.getElementById("miSucursal");
miSelect.addEventListener('change', buscarClima);

var miUbicacion = document.getElementById("miIframe");
miUbicacion.addEventListener('load', buscarClima);

function buscarClima() {

    var miSelectorTemp = document.getElementById("miSucursal");
    var opcion = miSelectorTemp.selectedIndex;
    var miLocalidad = "";

    switch (opcion) {
        case 0:
            miLocalidad = "Buenos%20Aires";
            break;
        case 1:
            miLocalidad = "La%20Plata";
            break;
        case 2:
            miLocalidad = "Quilmes";
            break;
        case 3:
            miLocalidad = "Berazategui";
            break;
        default:
            miLocalidad = "Buenos%20Aires";
            break;
    }


    const options = {

        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0b22bd4a15msh3ef9beedd23e3a1p11a250jsn508592bab82f',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    var miURL = "https://weatherapi-com.p.rapidapi.com/current.json?q=" + miLocalidad;

    fetch(miURL, options)
        .then(response => response.json())
        .then(response => completarClima(response))
        .catch(err => console.error(err));

}

function completarClima(response) {

    var miImagenClima = document.getElementById("miImagenClima");
    var miImagen = response.current.condition.icon
    var miClimaActual = document.getElementById("miClimaActual");

    miImagenClima.setAttribute("src", miImagen);

    miClimaActual.textContent = response.location.name + " " + response.current.temp_c + "°";

    return
}