//Header Dinamico

const miHeader = document.getElementById("miHeaderDinamico");
const miFragmentoHeader = document.createDocumentFragment();


//Logo
const div = document.createElement("div");
const aLogo = document.createElement("a");
const imagenLogo = document.createElement("img");
imagenLogo.setAttribute("src", "/public/img/LogoResto.PNG");
//imagenLogo.setAttribute("class", "fa-light fa-user-chef");
imagenLogo.classList.add("miLogo");


aLogo.setAttribute("href", "/index.html");

aLogo.appendChild(imagenLogo);

div.appendChild(aLogo);

miFragmentoHeader.appendChild(div);

//Nav
const navHeader = document.createElement("nav");
const listaU = document.createElement("ul");
const liMenu = document.createElement("li");
const liReservas = document.createElement("li");
const liSucursales = document.createElement("li");
const liContacto = document.createElement("li");
const aMenu = document.createElement("a");
const aReservas = document.createElement("a");
const aSucursales = document.createElement("a");
const aContacto = document.createElement("a");

aMenu.setAttribute("href", "/views/menu.html");
aReservas.setAttribute("href", "/views/reservas.html");
aSucursales.setAttribute("href", "/views/aboutUs.html");
aContacto.setAttribute("href", "/views/contacto.html");

liMenu.classList.add("misLinks");
liReservas.classList.add("misLinks");
liSucursales.classList.add("misLinks");
liContacto.classList.add("misLinks");

aMenu.textContent = "Menú";
aReservas.textContent = "Reservas";
aSucursales.textContent = "Sucursales";
aContacto.textContent = "Contacto";

liMenu.appendChild(aMenu);
liReservas.appendChild(aReservas);
liSucursales.appendChild(aSucursales);
liContacto.appendChild(aContacto);

listaU.appendChild(liMenu);
listaU.appendChild(liReservas);
listaU.appendChild(liSucursales);
listaU.appendChild(liContacto);


navHeader.appendChild(listaU);

miFragmentoHeader.appendChild(navHeader);

miHeader.appendChild(miFragmentoHeader);

miHeader.classList.add("header");




// Footer Dinamico

//Nav Interno
const divF = document.createElement("div");
//const aLogoF = document.createElement("a");
//const imagenLogoF = document.createElement("img");
//imagenLogoF.setAttribute("src", "/public/img/LogoResto.PNG");
//imagenLogoF.classList.add("miLogo");

//aLogoF.setAttribute("href", "/index.html");

//aLogoF.appendChild(imagenLogoF);

//divF.appendChild(aLogoF);

const navFooter = document.createElement("nav");
const miFooter = document.getElementById("miFooterDinamico");
const miFragmentoFooter = document.createDocumentFragment();
const listaF = document.createElement("ul");


const liInstagram = document.createElement("li");
const liFacebook = document.createElement("li");
const liTwitter = document.createElement("li");
const liPinterest = document.createElement("li");
const liYoutube = document.createElement("li");


const aInstagram = document.createElement("a");
const aFacebook = document.createElement("a");
const aTwitter = document.createElement("a");
const aPinterest = document.createElement("a");
const aYoutube = document.createElement("a");


aInstagram.setAttribute("href", "https://www.instagram.com");
aFacebook.setAttribute("href", "https://www.facebook.com");
aTwitter.setAttribute("href", "https://www.twitter.com");
aPinterest.setAttribute("href", "https://www.pinterest.com");
aYoutube.setAttribute("href", "https://www.youtube.com");

aInstagram.setAttribute("class", "fa fa-instagram");
aFacebook.setAttribute("class", "fa fa-facebook");
aTwitter.setAttribute("class", "fa fa-twitter");
aPinterest.setAttribute("class", "fa fa-pinterest");
aYoutube.setAttribute("class", "fa fa-youtube");

liInstagram.appendChild(aInstagram);
liFacebook.appendChild(aFacebook);
liTwitter.appendChild(aTwitter);
liPinterest.appendChild(aPinterest);
liYoutube.appendChild(aYoutube);

liInstagram.classList.add("misLinks");
liFacebook.classList.add("misLinks");
liTwitter.classList.add("misLinks");
liPinterest.classList.add("misLinks");
liYoutube.classList.add("misLinks");

listaF.appendChild(liInstagram);
listaF.appendChild(liFacebook);
listaF.appendChild(liTwitter);
listaF.appendChild(liPinterest);
listaF.appendChild(liYoutube);

navFooter.appendChild(listaF);

//miFragmentoFooter.appendChild(divF);
miFragmentoFooter.appendChild(navFooter);

miFooter.appendChild(miFragmentoFooter);
miFooter.classList.add("footer");


//Para la pagina de Sucursales

var miSelector = document.getElementById("miSucursal");
miSelector.addEventListener('change', cambiarIframe);

function cambiarIframe() {

    var miSelectorTemp = document.getElementById("miSucursal");
    var opcion = miSelectorTemp.selectedIndex;
    switch (opcion) {
        case 0:
            document.getElementById("miIframe").setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d210146.68270007908!2d-58.573732241947475!3d-34.61574328954111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20CABA!5e0!3m2!1ses-419!2sar!4v1665357582086!5m2!1ses-419!2sar");
            break;
        case 1:
            document.getElementById("miIframe").setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104686.07019244997!2d-58.02338348474164!3d-34.92050810703021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e62b1f0085a1%3A0xbcfc44f0547312e3!2sLa%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1665357808491!5m2!1ses-419!2sar");
            break;
        case 2:
            document.getElementById("miIframe").setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52467.87097784745!2d-58.281825574109476!3d-34.72429556483409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32e38e45f5777%3A0x6a86dac21334524f!2sQuilmes%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1665357877692!5m2!1ses-419!2sar");
            break;
        case 3:
            document.getElementById("miIframe").setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52443.46715259274!2d-58.23349972367625!3d-34.762728712306235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32f348c2fbdbf%3A0x80217bd276933f07!2sBerazategui%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1665357938953!5m2!1ses-419!2sar");
            break;
    }
}