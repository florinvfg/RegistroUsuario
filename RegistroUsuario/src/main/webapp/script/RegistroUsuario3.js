document.addEventListener('DOMContentLoaded', () => {
    // Selecciona el formulario por su ID
    let form = document.querySelector('#registroForm');

    // Añade eventos de entrada a cada campo del formulario que invocan funciones de validación específicas
    form.nombre.addEventListener('input', validarNombre); // Valida el nombre mientras se escribe
    form.apellido.addEventListener('input', validarApellido); // Valida el apellido mientras se escribe
    form.edad.addEventListener('input', validarEdad); // Valida la edad mientras se escribe
    form.telefono.addEventListener('input', validarTelefono); // Valida el teléfono mientras se escribe
    form.email.addEventListener('input', validarEmail); // Valida el email mientras se escribe
    form.password1.addEventListener('input', validarPass1); // Valida la primera contraseña mientras se escribe
    form.password2.addEventListener('input', validarPass2); // Valida la segunda contraseña mientras se escribe
    reset.addEventListener('click', function (){
        inputs=document.querySelectorAll('input');
        inputs.forEach(function (input){
            input.classList.remove('errorInput');
            input.classList.remove('validoInput');

        })
        let mensajesError=document.querySelectorAll('.msn');
        mensajesError.forEach(function (mensaje) {
         mensaje.textContent="";
        })
    }); // Valida la segunda contraseña mientras se escribe

});

function validarNombre() {
    // Selecciona el campo de nombre y el contenedor de mensajes de error
    let nombre = document.querySelector('#nombre');
    let msnError = document.querySelector('.nombreError');

    // Verifica si el campo de nombre está vacío
    if (!nombre.value.trim()) {
        nombre.classList.add("errorInput"); // Añade clase para marcar el campo como incorrecto
        nombre.classList.remove('validoInput'); // Remueve clase de campo válido
        msnError.textContent = 'El nombre es obligatorio.'; // Muestra mensaje de error
        return false;
    }
    // Verifica si el nombre contiene solo letras y espacios
    else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre.value.trim())) {
        nombre.classList.add('errorInput');
        nombre.classList.remove('validoInput');
        msnError.textContent = 'El nombre solo puede contener letras y espacios.';
        return false;
    }
    // Si el nombre es válido
    else {
        nombre.classList.remove('errorInput');
        nombre.classList.add('validoInput');
        msnError.textContent = '';
        return true;
    }
}

function validarApellido() {
    let apellido = document.querySelector('#apellido');
    let msnError = document.querySelector('.apellidoError');

    if (!apellido.value.trim()) {
        apellido.classList.add("errorInput");
        apellido.classList.remove('validoInput');
        msnError.textContent = 'El apellido es obligatorio.';
        return false;
    }
    else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(apellido.value.trim())) {
        apellido.classList.add('errorInput');
        apellido.classList.remove('validoInput');
        msnError.textContent = 'El apellido solo puede contener letras y espacios.';
        return false;
    }
    else {
        apellido.classList.remove('errorInput');
        apellido.classList.add('validoInput');
        msnError.textContent = '';
        return true;
    }
}

function validarEdad() {
    let edad = document.querySelector('#edad');
    let msnError = document.querySelector('.edadError');

    // Verifica si el campo de edad está vacío o no es un número
    if (!edad.value.trim() || isNaN(edad.value)) {
        edad.classList.add("errorInput");
        edad.classList.remove('validoInput');
        msnError.textContent = 'La edad es obligatoria.';
        return false;
    }
    // Verifica si la edad es un número positivo
    else if (edad.value <= 0) {
        edad.classList.add('errorInput');
        edad.classList.remove('validoInput');
        msnError.textContent = 'La edad debe ser un número positivo.';
        return false;
    }
    else {
        edad.classList.remove('errorInput');
        edad.classList.add('validoInput');
        msnError.textContent = '';
        return true;
    }
}

function validarTelefono() {
    let telefono = document.querySelector('#telefono');
    let msnError = document.querySelector('.telefonoError');

    // Verifica si el campo de teléfono está vacío o no es un número
    if (!telefono.value.trim() || isNaN(telefono.value)) {
        telefono.classList.add("errorInput");
        telefono.classList.remove('validoInput');
        msnError.textContent = 'El teléfono es obligatorio.';
        return false;
    }
    // Verifica si el teléfono tiene 9 dígitos y comienza con 6, 7, 8 o 9
    else if (!telefono.value.match(/^[6789]\d{8}$/)) {
        telefono.classList.add('errorInput');
        telefono.classList.remove('validoInput');
        msnError.textContent = 'El teléfono debe tener 9 números y comenzar por 6, 7, 8 o 9.';
        return false;
    }
    else {
        telefono.classList.remove('errorInput');
        telefono.classList.add('validoInput');
        msnError.textContent = '';
        return true;
    }
}

function validarEmail() {
    let email = document.querySelector('#email');
    let msnError = document.querySelector('.emailError');

    // Verifica si el campo de email está vacío
    if (!email.value.trim()) {
        email.classList.add("errorInput");
        email.classList.remove('validoInput');
        msnError.textContent = 'El email es obligatorio.';
        return false;
    }
    // Verifica si el email tiene un formato válido
    else if (!email.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)) {
        email.classList.add('errorInput');
        email.classList.remove('validoInput');
        msnError.textContent = 'El email no es en formato correcto.';
        return false;
    }
    else {
        email.classList.remove('errorInput');
        email.classList.add('validoInput');
        msnError.textContent = '';
        return true;
    }
}

function validarPass1() {
    let pass1 = document.querySelector('#password1');
    let msnError = document.querySelector('.pass1Error');

    // Verifica si la contraseña cumple con los requisitos: al menos 8 caracteres, una mayúscula, una minúscula y un número
    if (!pass1.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)) {
        pass1.classList.add("errorInput");
        pass1.classList.remove('validoInput');
        msnError.textContent = 'La contraseña debe tener una longitud mínima de 8 caracteres, al menos 1 mayúscula, 1 minúscula y 1 número.';
        return false;
    }
    else {
        pass1.classList.remove('errorInput');
        pass1.classList.add('validoInput');
        msnError.textContent = '';
        return true;
    }
}

function validarPass2() {
    let pass1 = document.querySelector('#password1');
    let pass2 = document.querySelector('#password2');
    let msnError = document.querySelector('.pass2Error');

    // Verifica si las contraseñas coinciden
    if (pass1.value !== pass2.value) {
        pass2.classList.add("errorInput");
        pass2.classList.remove('validoInput');
        msnError.textContent = 'Las contraseñas no son iguales.';
        return false;
    }
    else {
        pass2.classList.remove('errorInput');
        pass2.classList.add('validoInput');
        msnError.textContent = '';
        return true;
    }
}

function validarFomulario() {
    if (validarNombre() && validarApellido() && validarEdad()
        && validarTelefono() && validarEmail() && validarPass1()
        && validarPass2())
        return true;
    else
        return false;
}