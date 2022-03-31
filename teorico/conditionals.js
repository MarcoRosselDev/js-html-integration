// notas de condicionales 

// todo los que este en llaves { } es un bloque 
// los condicionales actuan como puertas de ingreso a los bloques
// estos son if (si) / else (demás) / else if (más si)

if  (true)  {                   //si cambiamos por false no se ejecuta el bloque
    document.write(`hola    <br>`);
}

//ejemplo 2

if  (10 > 15)   {               //podemos usar los todo tipo de condiciónes 
    document.write(` se activo la primera puerta.`)
}                               // podemos seguir preguntando y dando opciones con else if
else if (10 < 10) {
    document.write(`se activo la segunda puerta <br>`)
}                               // si nada de lo anterior se cumple entonces cerramos con
                                //  una respuesta "por defecto" que es en caso de que no 
                                //  se active ninguna de las otras puertas.
else    {
    document.write(`se activo la tercera puerta que es por defecto  <br>`)
}