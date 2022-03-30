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

let pregunta3 = `<br>¿como estas mi amigo ${nombre}? <br>`;
document.write(pregunta3);

//comparadores logicos.

// equality        (a == b)    igualdad
// inequality      (a != b)    desigualdad
// identity        (a === b)   identico
// non-identity    (a !== b)   no-identico
// greater than    (a > b)     mayor que 
// greater than or equality    (a >= b)    mayor o igual
// less than       (a < b)     menor que  
// less than or equal          (a <= b)    menor o igual 

//ejemplo

document.write(numero1 !== numero2);

