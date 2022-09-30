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
const nav = document.createElement("nav");
const listaU = document.createElement("ul");
const liQuienes = document.createElement("li");
const liMenu = document.createElement("li");
const liReservas = document.createElement("li");
const liContacto = document.createElement("li");
const aQuienes = document.createElement("a");
const aMenu = document.createElement("a");
const aReservas = document.createElement("a");
const aContacto = document.createElement("a");

aQuienes.setAttribute("href", "/views/aboutUs.html");
aMenu.setAttribute("href", "/views/menu.html");
aReservas.setAttribute("href", "/views/reservas.html");
aContacto.setAttribute("href", "contacto.html");

liQuienes.classList.add("misLinks");
liMenu.classList.add("misLinks");
liReservas.classList.add("misLinks");
liContacto.classList.add("misLinks");

aQuienes.textContent = "Quienes somos";
aMenu.textContent = "Menu";
aReservas.textContent = "Reservas";
aContacto.textContent = "Contacto";

liQuienes.appendChild(aQuienes);
liMenu.appendChild(aMenu);
liReservas.appendChild(aReservas);
liContacto.appendChild(aContacto);

listaU.appendChild(liQuienes);
listaU.appendChild(liMenu);
listaU.appendChild(liReservas);
listaU.appendChild(liContacto);


nav.appendChild(listaU);

miFragmentoHeader.appendChild(nav);

miHeader.appendChild(miFragmentoHeader);