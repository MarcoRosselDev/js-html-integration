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

while (numero < 9) {                   //numero es menor que 20 ?
    document.write(numero + `<br>`)     //lo mostramos en pantalla
    numero++;                           //le sumamos uno, ahora es 1 y se repite el siclo
}                                       //pregunta asta que no es menor que 20 y continua.

// do while

//la diferencia con while es que do while primero hace el bloque de codigo y luego pregunta

let numero2 = 0;

do{ 
    document.write(numero2 + `<br>`)    //ejecuto numero ( 0 ) en pantalla
    numero2++;                          //le sumo uno a numero2 
}   
while(numero2 <= 6)                     //ahora pregunto y si se cumple se reinicia el siclo.

// break;       rompe el bucle en cualquier punto 

let numero3 = 0;

while (numero3 < 1000)  {                   //se va a ejecutar 1000 veces 
    numero3++;                              //pero y si quiero que se detenga en x siclo?
    document.write(numero3);
    if  (numero3 == 10) {                   //entonces aparece if para salbar el dia.
        break;
    }
}

// for /for in /for of
//1.declaración e inicialización
//2.condición
//3.aumento o decremento       iterar  (ciclo)

for (let i = 0; i < 6 ; i++) {      //si quiero usar i declarada afuera dejos (i;i<6;i++)
    document.write(i + `<br>`)      //por que puede ser que quiera incorporar una variable de afuera.
}

//que pasa si quiero saltarme una iteración ?

//continue; es lo mismo que el break pero se lo salta no lo corta.
//ejemplo.

for (let i = 10; i < 19 ; i++) {
    if (i == 15) {
        continue;
    }
    document.write(i + `<br>`);     //ojo que no me salio si dejama esto antes del if
}

//for in and for of

let animales = ["gato","perro","chancho"];

for (animal in animales){
    document.write(animales[animal] + `<br>`);      //si dejo (animales) me imprime los numeros de 
}                                                   //la posición (0,1,2)

for (animal of animales){
    document.write(animal + `<br>`);
}

//diferencias 
//for in nos muestra la posición del elemento (0.1.2.3...)
//for of nos muestra lo que hay en cada posicion "el valor" (gato,perro,chancho)