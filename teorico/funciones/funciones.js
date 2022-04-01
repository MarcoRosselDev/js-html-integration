//notas de documentación de funciones en javascript

//temas

//1-definición y usos 
//2-forma de crear funciones
//3-return
//4-parametros
//5-scope
//6-funciones flecha

//1-definición y usos 

//Una función en JavaScript es similar a un procedimiento — un conjunto de instrucciones que realiza una tarea o calcula un valor, pero para que un procedimiento califique como función, debe tomar alguna entrada y devolver una salida donde hay alguna relación obvia entre la entrada y la salida.

//2-forma de crear funciones

function saludar()  {                   //podemos llamar despues con saludar()
    prompt(`hola  ¿como estas?`);
}
saludar();

//3-return

//es importante que la función devuelva un tipo de dato por que sino la funcion sera solo
//undefined.
//ejemplo. el bloque ejecuta un alert en pantalla entonces cuando llamemos al función
//solo ara eso y no devolvera un valor, por eso sale undefined y por eso usamos return

function thinks()  {
    alert(`hola`);                                  //esto no importa
    return  `la función se ejecuto correctamente :D`   //importante por que es lo que emviamos finalmente.
}
// document.write(thinks);
let other = thinks();                              //¿por que no puedo hacer un document.write(thinks);
document.write(other);                             //por que se imprime todo el bloque XD

//importante; la función son dos cosas . una es lo que hace dentro en su bloque de funcion
            //pero otra cosa es lo que devuelve (return)

            //otra cosa importante es que el return finaliza la función por lo que si tenemos algo despues de return no se ejecutara.(es como un break).

//4-parametros

function suma(numero1,numero2)  {       //sintaxis de la declaración de una función 
    let res = numero1 + numero2;        // aplicamos la formula y la guardamos en una variable let
    return res;                         //le pedimos retornar la respuesta
}

let resultado = suma(15,15);            //asignamos las variables en suma y las guardamos en una var let
    
document.write(resultado);              //imprimimos en pantalla el resultado.