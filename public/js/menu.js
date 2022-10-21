document.addEventListener('DOMContentLoaded', () => {

    let imagenes = [
        { img: '/public/img/1_b.jpg' },
        { img: '/public/img/2_b.jpg' },
        { img: '/public/img/3_b.jpg' },
        { img: '/public/img/4_b.jpg' },
        { img: '/public/img/5_b.jpg' },
        { img: '/public/img/6_b.jpg' },
        { img: '/public/img/7_b.jpg' },
        { img: '/public/img/8_b.jpg' },
        { img: '/public/img/9_b.jpg' },
        { img: '/public/img/10_b.jpg' },
        { img: '/public/img/11_b.jpg' },
        { img: '/public/img/12_b.jpg' },
        { img: '/public/img/13_b.jpg' },
        { img: '/public/img/14_b.jpg' },
        { img: '/public/img/15_b.jpg' },
        { img: '/public/img/16_b.jpg' },
        { img: '/public/img/17_b.jpg' },
        { img: '/public/img/18_b.jpg' },
        { img: '/public/img/19_b.jpg' },
        { img: '/public/img/20_b.jpg' },
    ]

    const overlay = document.querySelector('.overlay');
    const galeriaImagenes = document.querySelectorAll('.galeria img');
    const imgSlideshow = document.getElementById('miMarco');


    Array.from(galeriaImagenes).forEach(img => {
        img.addEventListener('click', event => {
            const imagenSeleccionada = +event.target.dataset.imgMostrar;
            imgSlideshow.setAttribute('src', imagenes[imagenSeleccionada].img);
            overlay.style.opacity = 1;
            overlay.style.visibility = 'visible';
        })
    })

    document.querySelector('.btnCerrar').addEventListener('click', () => {
        overlay.style.opacity = 0;
        overlay.style.visibility = 'hidden';
    })

})