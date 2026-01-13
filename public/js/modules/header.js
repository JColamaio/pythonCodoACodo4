// Modulo Header Dinamico

export function initHeader() {
    const miHeader = document.getElementById("miHeaderDinamico");
    if (!miHeader) return;

    const miFragmentoHeader = document.createDocumentFragment();

    // Logo
    const div = document.createElement("div");
    const aLogo = document.createElement("a");
    const imagenLogo = document.createElement("img");
    imagenLogo.setAttribute("src", "/public/img/LogoResto.PNG");
    imagenLogo.classList.add("miLogo");
    aLogo.setAttribute("href", "/index.html");
    aLogo.appendChild(imagenLogo);
    div.appendChild(aLogo);
    miFragmentoHeader.appendChild(div);

    // Nav
    const navHeader = document.createElement("nav");
    const listaU = document.createElement("ul");

    const menuItems = [
        { href: "/views/menu.html", text: "Menú" },
        { href: "/views/reservas.html", text: "Reservas" },
        { href: "/views/aboutUs.html", text: "Sucursales" },
        { href: "/views/contacto.html", text: "Contacto" }
    ];

    menuItems.forEach(item => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.setAttribute("href", item.href);
        a.textContent = item.text;
        li.classList.add("misLinks");
        li.appendChild(a);
        listaU.appendChild(li);
    });

    navHeader.appendChild(listaU);
    miFragmentoHeader.appendChild(navHeader);
    miHeader.appendChild(miFragmentoHeader);
    miHeader.classList.add("header");
}
