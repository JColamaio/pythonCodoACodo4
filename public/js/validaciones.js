//Validacion del formulario de contacto


const misRegExp = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

//var miBotonContacto = document.getElementById("miBotonComentarios");
//miBotonContacto.addEventListener('click', validarDatosContacto);

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("miFormContacto").addEventListener('submit', validarDatosContacto);
});


/* function validarDatosContacto() {
    const miNombre = document.getElementById("miNombreComentarios");
    const miEmail = document.getElementById("miEmailComentarios");
    const miComentario = document.getElementById("mensaje");
    var correcto = true;

    if (!misRegExp.nombre.test(miNombre.textContent)) {
        alert("El nombre solo puede tener letras y espacios. No puede estar vacio");
        correcto = false;
    };

    if (!misRegExp.correo.test(miEmail.textContent)) {
        alert("El formato de mail es incorrecto o está vacio");
        correcto = false;
    };

    return correcto;
}
 */

function validarDatosContacto(evento) {
    evento.preventDefault();

    var miNombre = document.getElementById('miNombreComentarios').value;

    if (miNombre.length == 0) {
        alert('El nombre no puede estar vacio');
        return;
    }

    if (!misRegExp.nombre.test(miNombre)) {
        alert("El nombre solo puede tener letras y espacios");
        return;
    };

    var miEmail = document.getElementById('miEmailComentarios').value;

    if (miEmail.length == 0) {
        alert('El email no puede estar vacio');
        return;
    }

    if (!misRegExp.correo.test(miEmail)) {
        alert("El formato de mail es incorrecto");
        return;
    };

    var miComentario = document.getElementById("mensaje").value;

    if (miComentario.length < 10) {
        alert('Decinos un poco mas, al menos 10 caracteres');
        return;
    }

    alert("Gracias por tus valiosos comentarios!");
    this.submit();

}



//const miFormulario = document.getElementById("miFormContacto");

/* miFormulario.addEventListener('submit', (e) => {
    e.preventDefault;

    if (validarDatosContacto()) {
        alert("Gracias por sus comentarios");
        document.getElementById("miNombreComentarios").textContent = "";
        document.getElementById("miEmailComentarios").textContent = "";
        document.getElementById("mensaje").textContent = "";
    }
}) */

document.getElementById("botonReservas").addEventListener('click', () => {
    var miReserva = document.getElementById('nombre').value;

    if (miReserva.length == 0) {
        alert('El nombre no puede estar vacio');
        return;
    }


    alert("Tu reserva esta confirmada, te esperamos!");
    document.getElementById('nombre').value = "";
})