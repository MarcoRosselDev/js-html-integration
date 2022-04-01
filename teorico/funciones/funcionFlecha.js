//6-funciones flecha

// esta tercera forma de declarar funciones es mucho mas eficiente por que todo se abrevia en una sola linea de codigo.
//por ejemplo

// const bienvenida = function(nombre){
//     document.write(frase);
// }

// const bienvenida = nombre => document.write(frase);     //esta retornando automaticamente, no nesecita en return.

// bienvenida(`pedro`);

const saludar = (nombre)=>{
    document.write(`hola como estas?` + nombre)
}

saludar("pedro");