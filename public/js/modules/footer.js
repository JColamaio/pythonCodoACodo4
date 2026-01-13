// Modulo Footer Dinamico

export function initFooter() {
    const miFooter = document.getElementById("miFooterDinamico");
    if (!miFooter) return;

    const miFragmentoFooter = document.createDocumentFragment();
    const navFooter = document.createElement("nav");
    const listaF = document.createElement("ul");

    const socialLinks = [
        { href: "https://www.instagram.com", icon: "fa fa-instagram" },
        { href: "https://www.facebook.com", icon: "fa fa-facebook" },
        { href: "https://www.twitter.com", icon: "fa fa-twitter" },
        { href: "https://www.pinterest.com", icon: "fa fa-pinterest" },
        { href: "https://www.youtube.com", icon: "fa fa-youtube" }
    ];

    socialLinks.forEach(link => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.setAttribute("href", link.href);
        a.setAttribute("class", link.icon);
        a.setAttribute("target", "_blank");
        a.setAttribute("rel", "noopener noreferrer");
        li.classList.add("misLinks");
        li.appendChild(a);
        listaF.appendChild(li);
    });

    navFooter.appendChild(listaF);
    miFragmentoFooter.appendChild(navFooter);
    miFooter.appendChild(miFragmentoFooter);
    miFooter.classList.add("footer");
}
