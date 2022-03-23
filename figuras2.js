
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

    const resultPerimetro = document.getElementById("ResultP");
    resultPerimetro.innerText = "el perimetro del cuadreado es : " + importante + " cm";
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    
    const areaCua = areaCuadrado(value);

    const area = document.getElementById("asdhfl");
    area.innerText = "el área del cuadreado es : " + areaCua + " cm^2";
    
}

function calcularPerimetroCirculo() {
  const input = document.getElementById("inputCircle");
  const value = input.value;

  const whereverit = perimetroCirculo(value);
  const circle = document.getElementById("circlePerimeterResult");
  circle.innerText = "el perimetro del circulo es : " + whereverit + "cm";
}

function calcularÁreaCirculo() {
  const input = document.getElementById("inputCircle");
  const value = input.value;

  const randomName = areaCirculo(value);
  // alert("el área del circulo es :" + randomName)
  const circleArea = document.getElementById("circlAreaResult");
  circleArea.innerText = "el Area del circulo es :" + randomName + "cm^2";
}