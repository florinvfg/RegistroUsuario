document.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('#registroForm');

    form.nombre.addEventListener('input', validarNombre);//elemento input->dentro del input,se va a la funccion validar nombre
    form.apellido.addEventListener('input', validarApellido);
    form.edad.addEventListener('input', validarEdad);
    form.telefono.addEventListener('input', validarTelefono);
    form.email.addEventListener('input', validarEmail);
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

function validarEdad(){
    let edad = document.querySelector('#edad');
    let msnError = document.querySelector('.edadError');

    if (!edad.value.trim() || isNaN(edad.value)){
        edad.classList.add("errorInput");
        edad.classList.remove('validoInput');
        msnError.textContent = 'El edad es obligatorio.';
        return false;
    }else if (edad.value<=0){
        edad.classList.add('errorInput');
        edad.classList.remove('validoInput');
        msnError.textContent = 'La edad debe ser un numero positivo';
        return false;
    }else {
        edad.classList.remove('error-input');
        edad.classList.add('validoInput');
        msnError.textContent = '';
        return true;
    }
}
function validarTelefono() {
    let telefono = document.querySelector('#telefono');
    let msnError = document.querySelector('.telefonoError');

    if (!telefono.value.trim() || isNaN(telefono.value)) {
        telefono.classList.add("errorInput");
        telefono.classList.remove('validoInput');
        msnError.textContent = 'El telefono es obligatorio.';
        return false;
    }
    else if (!telefono.value.match(/^[6789]\d{8}$/)){
        telefono.classList.add('errorInput');
        telefono.classList.remove('validoInput');
        msnError.textContent = 'El telefono debe tener 9 numeros y comensar por 6/7/8/9';
        return false;
    }else {
        telefono.classList.remove('error-input');
        telefono.classList.add('validoInput');
        msnError.textContent = '';
        return true;
    }
}
function validarEmail() {
    let email = document.querySelector('#email');
    let msnError = document.querySelector('.emailError');

    if (!email.value.trim() || isNaN(email.value)) {
        email.classList.add("errorInput");
        email.classList.remove('validoInput');
        msnError.textContent = 'El email es obligatorio.';
        return false;
    }
    else if (!email.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)){
        email.classList.add('errorInput');
        email.classList.remove('validoInput');
        msnError.textContent = 'El email no es en formato corecto';
        return false;
    }else {
        email.classList.remove('error-input');
        email.classList.add('validoInput');
        msnError.textContent = '';
        return true;
    }
}
function validarFomulario() {
    if (validarNombre() && validarApellido() && validarEdad() && validarTelefono() && validarEmail())
        return true;
    else
        return false;
}