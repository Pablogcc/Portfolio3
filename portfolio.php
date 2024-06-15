<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $nombre = $_POST["nombre"];
    $edad = $_POST["edad"];
    $correo = $_POST["gmail"];
    $datos_personales = $_POST["datos"];


    $archivo = "datos_formulario.txt";
    $contenido = "Nombre: $nombre\nEdad: $edad\nCorreo: $correo\nDatos personales: $datos_personales\n\n";


    $gestor = fopen($archivo, "a");


    fwrite($gestor, $contenido);


    fclose($gestor);


    header("Location: tu_pagina_de_formulario.php");
    exit();
}
