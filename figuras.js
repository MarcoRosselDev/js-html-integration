//codigo de cuadrado, para agrupar usamos console.group()

console.group("cuadrado");

const LadosDeUnCuadrado = 15;
console.log("los lados del cuadrado miden:" + LadosDeUnCuadrado + "cm");

const PerimetroCuadrado = LadosDeUnCuadrado * 4;
console.log("El perimetro del cuadrado es :" + PerimetroCuadrado + "cm" );

const AreaCuadrado = LadosDeUnCuadrado*LadosDeUnCuadrado;
console.log("El area de un cuadrado es :" + AreaCuadrado + "cm^2")

console.groupEnd("cuadrado");


console.group("triangulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const BaseTriangulo = 4;
const AlturaTriangulo = 5.5;

console.log(
    "Los lados del triangulo miden:"
    + ladoTriangulo1 + "cm de lado " +
    + ladoTriangulo2 + "cm de lado"
    + AlturaTriangulo + "cm de altura"
    + BaseTriangulo + "cm de base"
);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + BaseTriangulo;
console.log("el perimetro del triangulo es: " + perimetroTriangulo +"cm");

const areaTriangulo = (BaseTriangulo * AlturaTriangulo) / 2;
console.log("el area del triangulo es: " + areaTriangulo + "cm^2")

console.groupEnd("triangulo");

console.group("circulo")

const radio = 4;

console.log("el radio del circulo es :" + radio + "cm")

const perimetroCirculo = (2*radio*3.1415)
console.log("el perimetro del circulo es :" + perimetroCirculo + "cm");

const areaCirculo = radio*radio*3.1415;
console.log("el area del circulo es: " + areaCirculo + "cm^2")



console.groupEnd()