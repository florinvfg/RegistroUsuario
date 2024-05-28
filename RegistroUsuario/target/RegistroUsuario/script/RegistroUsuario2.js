function validarFomulario(){
    let form=document.getElementById("registroForm")
    let nombre=form.nombre;
    let apellido=form.apellido;
    let edad=form.edad;
    let telefono=form.telefono;
    let direccion=form.direccion;
    let email=form.email;
    let pass1=form.password1;
    let pass2=form.password2;
    let salida=document.querySelector(".error");
    let errorMsn="";
    let fallo=false;
//limpiar los estilos de los input
    let inputs=document.querySelectorAll("input");
    //recorre el array y elimina esa clase errorInput si esta.
    inputs.forEach( input=>input.classList.remove("errorInput"));

    //Validar campos trim quita los espacios vacios  de los extremos ej: _florin_
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre.value.trim())){
        errorMsn+="El nombre es obligatorio<br>";
        nombre.classList.add("errorInput");//que se ponga el borde en rojo
        fallo=true;
    }
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(apellido.value.trim())){
        errorMsn+="El apellido es obligatorio<br>";
        apellido.classList.add("errorInput");//que se ponga el borde en rojo
        fallo=true;
    }
    if (!edad.value.trim() || isNaN(edad.value) || edad.value<=0){
        errorMsn+="La edad es obligatoria, solo números y positivos<br>";
        edad.classList.add("errorInput");//que se ponga el borde en rojo
        fallo=true;
    }
    if (!telefono.value.match(/^\d{9}$/)){
        errorMsn+="El teléfono debe contener 9 dígitos<br>";
        telefono.classList.add("errorInput");//que se ponga el borde en rojo
        fallo=true;
    }
    if (!email.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)){
        errorMsn+="El email debe ser en formato correcto<br>";
        email.classList.add("errorInput");//que se ponga el borde en rojo
        fallo=true;
    }
    if(pass1.value.trim()!==pass2.value.trim()){
        errorMsn+="La contraseña y repetir contraseña deben ser iguales<br>";
        pass1.classList.add("errorInput");//que se ponga el borde en rojo
        pass2.classList.add("errorInput");//que se ponga el borde en rojo
        fallo=true;
    }else if (!pass1.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)){
        errorMsn+="La contraseña una longtud minima de 8 caracteres: al menos 1 mayúscula, 1 minúscula, 1 número<br>";
        pass1.classList.add("errorInput");//que se ponga el borde en rojo
        pass2.classList.add("errorInput");//que se ponga el borde en rojo
        fallo=true;
    }
    if (fallo){
        salida.innerHTML=errorMsn;
        return false;
    }else {
        return true;
    }
}