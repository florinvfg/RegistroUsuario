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
    <script src="script/RegistroUsuario3.js"></script>
    <title>📌Registro de Usuario</title>
</head>
<body>
<div class="container">
    <h1>Alta de Usuarios</h1>
    <p>A continuación, indique los datos suministrados para darse de alta en nuestro Sistema.</p>
    <p>Los marcados con <span class="rojo">*</span> son obligatorios. </p>
    <form action="" id="registroForm" onsubmit="return validarFomulario()" >
        <p class="form-group ">
            <label for="nombre" >Nombre<span class="rojo">*</span>:</label>
            <input type="text" id="nombre" name="nombre">
        <p class="nombreError rojo"></p>
        </p>
        <p class="form-group ">
            <label for="apellido" >Apellidos<span class="rojo">*</span>:</label>
            <input type="text" id="apellido" name="apellido">
        <p class="apellidoError rojo"></p>
        </p>
        <p class="form-group ">
            <label for="edad">Edad<span class="rojo">*</span>:</label>
            <input type="number" id="edad" name="edad">
        <p class="edadError rojo"></p>
        </p>
        </p>
        <p class="form-group ">
            <label for="telefono">Teléfono<span class="rojo">*</span>:</label>
            <input type="text" id="telefono" name="telefono">
            <p class="apellidoError rojo"></p>
        </p>
        </p>
        <p class="form-group ">
            <label for="direccion">Dirección:</label>
            <input type="text" id="direccion" name="direccion">
        </p>
        <p class="form-group ">
            <label for="email">Email<span class="rojo">*</span>:</label>
            <input type="email" id="email" name="email">
        <p class="emailError rojo"></p>
        </p>
        <p class="form-group ">
            <label for="password1">Contraseña<span class="rojo">*</span>:</label>
            <input type="password" name="password1" id="password1">
        <p class="pass1Error rojo"></p>
        </p>
        <p class="form-group ">
            <label for="password2">Repetir Contraseña<span class="rojo">*</span>:</label>
            <input type="password" name="password2" id="password2">
        <p class="pass2Error rojo"></p>
        </p>

        <p>
            <input type="submit" value="Registrar" class="boton izquierda">
            <input type="reset" value="Borrar" class="boton derecha">
        </p>
        <p class="error"></p>
    </form>

</div>

</body>
</html>