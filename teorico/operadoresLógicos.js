// operadores lógicos

// los operadores lógicos nos devuelven un resultado a partir de que se cumpla o no una condición. su resultado es booleano. y sus operadores son valores lógicos o asimilables a ellos.

// and (&&) lógico;    expr1 && expr2      regresa expr1

//ejemplo;

let afirmación = true;
let afirmación2 = true;

let resultadoAfirmación = afirmación &&  afirmación2;     // solo si las 2 son true devuelve true 
let resultadoAfirmación3 = afirmación =! afirmación2;     // 
let resultadoAfirmación2 = afirmación || afirmación2;     // basta con un true devuelve true

document.write(resultadoAfirmación2);
document.write(resultadoAfirmación3);
document.write(resultadoAfirmación);

// para escribir en varias partes a la vez precionar alt + click en donde queremos escribir.
