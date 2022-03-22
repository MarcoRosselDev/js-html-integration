
console.group("cuadrado");

function perimetroCuadrado (lado) {
    return lado * 4;
}

function areaCuadrado (lado) {
    return lado * lado;
}

console.groupEnd();


console.group("triangulo");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base*altura) / 2;
}

console.groupEnd();

console.group("Circulos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del cÃ­rculo es: " + radioCirculo + "cm");

// DiÃ¡metro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Ãrea
function areaCirculo(radio) {
  return (radio * radio) * PI;
}

console.groupEnd();

// interaccion con html

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const importante = perimetroCuadrado(value);
    alert("el perimetro del cuadrado es:" + importante);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert("el area del cuadrado es :" + area);
}