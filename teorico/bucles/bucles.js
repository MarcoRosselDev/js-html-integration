//los bucles son casi lo mismo que el if pero se la pasan preguntando

//bucle while:
//          cuando se cumple la condicional se procede al bloque de código
//          pero una vez realizado el bloque vuelve a preguntar,
//          por lo que si no se cuida de que se rompa esto puede seguir asta el infinito.

let numero = 0;

if (numero < 10)    {           // si numero es menor que 10
    // numero++;                   // lo sumamos uno
    document.write(numero);     //luego lo mostramos 
                                //deveria mostrar un 1 en html.
    document.write(`<br>`);
}
//ahora usamos un bucle

while (numero < 20) {                   //numero es menor que 20 ?
    document.write(numero + `<br>`)     //lo mostramos en pantalla
    numero++;                           //le sumamos uno, ahora es 1 y se repite el siclo
}                                       //pregunta asta que no es menor que 20 y continua.