
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

// interacción con html (triángulo)

// function calcularPerimetroTriángulo() {
//   const input = document.getElementById("inputTriángulo");
//   const value = input.value;

//   const wherever = perimetroTriangulo(value);
//   alert("el perimetro del triángulo es :" + wherever )
// }

// interacción con html (circle)

function calcularPerimetroCirculo() {
  const input = document.getElementById("inputCircle");
  const value = input.value;

  const whereverit = perimetroCirculo(value);
  alert("el perimetro del circulo es :" + whereverit)
}

function calcularÁreaCirculo() {
  const input = document.getElementById("inputCircle");
  const value = input.value;

  const randomName = areaCirculo(value);
  alert("el área del circulo es :" + randomName)
}