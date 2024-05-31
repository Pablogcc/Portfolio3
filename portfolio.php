<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $nombre = $_POST["nombre"];
    $apellido = $_POST["apellido"];
    $telefono = $_POST["phone"];
    $correo = $_POST["gmail"];
    $datos_personales = $_POST["datos"];


    $archivo = "datos_formulario.txt";
    $contenido = "Nombre: $nombre\nApellidos: $apellido\nTeléfono: $telefono\nCorreo: $correo\nDatos personales: $datos_personales\n\n";


    $gestor = fopen($archivo, "a");


    fwrite($gestor, $contenido);


    fclose($gestor);


    header("Location: tu_pagina_de_formulario.php");
    exit();
}
