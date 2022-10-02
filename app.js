//Header Dinamico

const miHeader = document.getElementById("miHeaderDinamico");
const miFragmentoHeader = document.createDocumentFragment();


//Logo
const div = document.createElement("div");
const aLogo = document.createElement("a");
const imagenLogo = document.createElement("img");
imagenLogo.setAttribute("src", "/public/img/LogoResto.PNG");
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
aContacto.setAttribute("href", "contacto.html");

liMenu.classList.add("misLinks");
liReservas.classList.add("misLinks");
liSucursales.classList.add("misLinks");
liContacto.classList.add("misLinks");

aMenu.textContent = "Reservas";
aReservas.textContent = "Sucursales";
aSucursales.textContent = "Menú";
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




// //Footer Dinamico

// //Nav Interno
// const navFooter = document.createElement("nav");
// const miFooter = document.getElementById("miFooterDinamico");
// const miFragmentoFooter = document.createDocumentFragment();

// const liCuenta = document.createElement("li");
// const liIngresa = document.createElement("li");
// const liCompras = document.createElement("li");
// const aCuenta = document.createElement("a");
// const aIngresa = document.createElement("a");
// const aCompras = document.createElement("a");

// aCuenta.setAttribute("href", "#" );
// aIngresa.setAttribute("href", "#");
// aCompras.setAttribute("href", "#");

// liCuenta.classList.add("misLinks");
// liIngresa.classList.add("misLinks");
// liCompras.classList.add("misLinks");

// aCuenta.textContent = "Crea tu cuenta";
// aIngresa.textContent = "Ingresar";
// aCompras.textContent = "Mis Compras";

// liCuenta.appendChild(aCuenta);
// liIngresa.appendChild(aIngresa);
// liCompras.appendChild(aCompras);

// listaU.appendChild(liCuenta);
// listaU.appendChild(liIngresa);
// listaU.appendChild(liCompras);

// navFooter.appendChild(listaU);

// miFragmentoFooter.appendChild(navFooter);


// //Nav Social Links\\

// const liInstagram = document.createElement("li");
// const liFacebook = document.createElement("li");
// const liTwitter = document.createElement("li");
// const aInstagram = document.createElement("a");
// const aFacebook = document.createElement("a");
// const aTwitter = document.createElement("a");

// aInstagram.setAttribute("href", "#" );
// aFacebook.setAttribute("href", "#");
// aTwitter.setAttribute("href", "#");

// liInstagram.classList.add("logoSocial");
// liFacebook.classList.add("logoSocial");
// liTwitter.classList.add("logoSocial");

// aInstagram.textContent = "Crea tu cuenta";
// aIngresa.textContent = "Ingresar";
// aCompras.textContent = "Mis Compras";

// liInstagram.appendChild(aCuenta);
// liIngresa.appendChild(aIngresa);
// liCompras.appendChild(aCompras);

// listaU.appendChild(liCuenta);
// listaU.appendChild(liIngresa);
// listaU.appendChild(liCompras);

// navFooter.appendChild(listaU);

// miFragmentoFooter.appendChild(navFooter);


// miFooter.appendChild(miFragmentoFooter);
