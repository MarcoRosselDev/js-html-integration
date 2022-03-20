
console.group("cuadrado");

function perimetroCuadrado (lado) {
    return lado * 4;
}

function areaCuadrado (lado) {
    return lado*lado;
}

console.groupEnd("cuadrado");


console.group("triangulo");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 +base;
}

function areaTriangulo(base, altura){
    return (base*altura)/2;
}

console.groupEnd("triangulo");

console.group("circulo")

    return radio*2*3.1415;
}

function areaCirculo (radio){
    return radio*radio*3.1415;
}



console.groupEnd() 

// interaccion con html

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularÁreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area);
}