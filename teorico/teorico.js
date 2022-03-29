// imprimir un mensaje al usuario en forma de alerta ¡

let nombre = prompt("dime tu nombre");
document.write("hola " + nombre + ",  buen dia.<br>");


// probando los operadores de asignación 

let numero1 = 3;
let numero2 = 8;

document.write(numero2 ** numero1 );

//probando la concatenación 

let saludo = "<br> hola ¡";
let pregunta = "¿como estas?";
let frase = saludo + pregunta;

document.write(frase);

// probando la ${ } para llamar contenido de letss

let prgunta2 = "<br> ¿como estas " + nombre +"?";
document.write(prgunta2);

// mejorado usando ``

let pregunta3 = `<br>¿como estas mi amigo ${nombre}?`;
document.write(pregunta3);