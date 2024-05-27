window.onload=function (){
    let formulario=document.querySelector("#registroForm")//objeto
    formulario.addEventListener("submit",validarFormulario);

}
function validarFormulario(){
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
    //recore el array y elimina esa clase errorInput si esta
    inputs.forEach(input=>input.classList.remove("errorInput"));

    //validar campos trin quita espacios vacios de los extremos
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre.value.trim())){
        errorMsn+="El nombre es obligatorio";
        nombre.classList.add("errorInput");//que se ponga el borde en rojo
       fallo= true;

    }
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(apellido.value.trim())){
        errorMsn+="El apellido es obligatoriobrbr<br>";
        apellido.classList.add("errorInput");//que se ponga el borde en rojo
        fallo= true;

    }
    if (!edad.value.trim() || isNaN(edad.value) || edad.value <= 0 ) {
        errorMsn += "La edad es obligatoria y debe ser un número positivo.<br>";
        edad.classList.add("errorInput"); // Añade la clase para resaltar el campo con borde rojo
        fallo= true;
    }

    if (!telefono.value.match(/^\d{9}$/)) {
        errorMsn += "El teléfono es obligatorio y debe contener 9 dígitos.<br>";
        telefono.classList.add("errorInput"); // Añade la clase para resaltar el campo con borde rojo
        fallo= true;
    }
    if (!email.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)) {
        errorMsn += "El email debe ser en formato correcto.<br>";
        email.classList.add("errorInput"); // Añade la clase para resaltar el campo con borde rojo
        fallo= true;
    }
    if(pass1.value.trim()!==pass2.value.trim()){
        errorMsn += "La contraseña y repetir contraseña debe ser iguales<br>";
        pass1.classList.add("errorInput"); // Añade la clase para resaltar el campo con borde rojo
        pass2.classList.add("errorInput");
        fallo= true;
    }else if(!pass1.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)){
        errorMsn+= "La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, y un número.<br>";
        pass1.classList.add("errorInput"); // Añade la clase para resaltar el campo con borde rojo
        pass2.classList.add("errorInput");
        fallo= true;
    }
    if (fallo){
      salida.innerHTML=errorMsn;
      return false;
    }else {
        return true;
    }
    return true;


}