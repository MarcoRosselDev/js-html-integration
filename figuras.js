//codigo de cuadrado, para agrupar usamos console.group()

console.group("cuadrado");

const LadosDeUnCuadrado = 15;
console.log("los lados del cuadrado miden:" + LadosDeUnCuadrado + "cm");

const PerimetroCuadrado = LadosDeUnCuadrado * 4;
console.log("El perimetro del cuadrado es :" + PerimetroCuadrado + "cm" );

const AreaCuadrado = LadosDeUnCuadrado*LadosDeUnCuadrado;
console.log("El area de un cuadrado es :" + AreaCuadrado + "cm^2")

console.groupEnd("cuadrado");


console.group(triangulo);

const ladoTriangulo1 = 5;
const ladoTriangulo2 = 5;
const BaseTriangulo = 3;

console.log(
    "Los lados del triangulo miden:"
    +  ladoTriangulo1
    + "cm, "
    + ladoTriangulo2
    + "cm, "
    + BaseTriangulo
    + "cm."
);

console.groupEnd("cuadrado");