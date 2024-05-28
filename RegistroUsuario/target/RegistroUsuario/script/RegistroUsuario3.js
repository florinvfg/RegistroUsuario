document.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('#registroForm');

    form.nombre.addEventListener('input', validarNombre);//elemento input->dentro del input,se va a la funccion validar nombre
    form.apellido.addEventListener('input', validarApellido);
});

function validarNombre() {//validamos que no este vacio el nombre
    let nombre = document.querySelector('#nombre');
    let msnError = document.querySelector('.nombreError');

    if (!nombre.value.trim()) {
        nombre.classList.add("errorInput");
        nombre.classList.remove('validoInput');
        msnError.textContent = 'El nombre es obligatorio.';
        return false;
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre.value.trim())) {//solo letra y espacios
        nombre.classList.add('errorInput');
        nombre.classList.remove('validoInput');
        msnError.textContent = 'El nombre solo puede contener letras y espacios.';
        return false;
    } else {//esta bien,y lo ponemos en verde
        nombre.classList.remove('error-input');
        nombre.classList.add('validoInput');
        msnError.textContent = '';
        return true;
    }
}

function validarApellido() {//validamos que no este vacio el nombre
    let apellido = document.querySelector('#apellido');
    let msnError = document.querySelector('.apellidoError');

    if (!apellido.value.trim()) {
        apellido.classList.add("errorInput");
        apellido.classList.remove('validoInput');
        msnError.textContent = 'El apellido es obligatorio.';
        return false;
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(apellido.value.trim())) {//solo letra y espacios
        apellido.classList.add('errorInput');
        apellido.classList.remove('validoInput');
        msnError.textContent = 'El apellido solo puede contener letras y espacios.';
        return false;
    } else {//esta bien,y lo ponemos en verde
        apellido.classList.remove('error-input');
        apellido.classList.add('validoInput');
        msnError.textContent = '';
        return true;
    }
}

function validarFomulario() {
    if (validarNombre() && validarApellido())
        return true;
    else
        return false;
}