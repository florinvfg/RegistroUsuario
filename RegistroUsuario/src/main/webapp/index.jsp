
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/responsive.css">
    <script  src="script/RegistroUsuario2.js"></script>
    <title>Registro De Usuario 😉</title>
</head>
<body>
<div class="container">
    <h1 class="texto-azul">Alta de Usuarios</h1>
    <p class="texto-azul">A continuación, indique los datos suministrados para darse de alta en nuestro Sistema 😉</p>

    <p>Los marcados con <span class="rojo">(*)</span> son obligatorios</p>
    <form action="" id="registroForm"onsubmit="return validarFormulario()">

        <p class="form-group">
            <label for="nombre" class="texto-azul">Nombre <span class="rojo">*</span>:</label>
        <input type="text" id="nombre" name="nombre"></input>
            <p class="nombreError rojo"></p>
        </p>

        <p class="form-group">
            <label for="apellido" class="texto-azul">Apellidos <span class="rojo">*</span>:</label>
            <input type="text" id="apellido" name ="apellido"></input>
            <p class="apellidoError rojo"></p>
        </p>
        <p class="form-group">
            <label for="edad"  class="texto-azul">Edad <span class="rojo">*</span>:</label>
            <input type="number" id="edad" name="edad">
            <p class="edadError rojo"></p>
        </p>

        <p class="form-group">
            <label for="telefono"  class="texto-azul">Telefono <span class="rojo">*</span>:</label>
            <input type="text" id="telefono" name="telefono">
            <p class="telefonoError rojo"></p>
        </p>


        <p class="form-group">
            <label for="direccion"  class="texto-azul">Direccion<span class="rojo">*</span>:</label>
            <input type="text" id="direccion" name="direccion">
            <p class="direccionError rojo"></p>
        </p>


        <p class="form-group">
            <label for="email"  class="texto-azul">Email<span class="rojo">*</span>:</label>
            <input type="text" id="email" name="email">
            <p class="emailError rojo"></p>
        </p>

        <p class="form-group">
            <label for="password1" class="texto-azul">Contraseña<span class="rojo">*</span>:</label>
            <input type="text" id="password1" name="password1">
            <p class="contraseñaError rojo"></p>
        </p>

        <p class="form-group">
            <label for="password2"  class="texto-azul">Repetir Contraseña<span class="rojo">*</span>:</label>
            <input type="text" id="password2" name="password2">
            <p class="repetirContraseñaError rojo"></p>
        </p>

        <p >
            <input type="submit" value="Registrar" class="boton izquierda">


            <input type="reset" value="Borrar" class="boton derecha">
        </p>

<p class="error"></p>
    </form>

</div>




</body>
</html>