// tengo que saber cuanto dinero tienen 3 amigos.
// quieren comprar los hela dos más caros posibles.
// quieren saber el vuelto. 

let juan = Number(prompt(`¿cuanto dinero tienes juan ?`));      //ojito que se resolvio con parseInt(prompt(`pregunta`))
let luis = Number(prompt(`¿cuanto dinero tienes  luis?`));      //parseInt combierte en tipo numero pero y Number ?
let marco =Number(prompt(`¿cuanto dinero tienes  marco?`));

//preguntamos cuanto dinero tienen y se lo asignamos a una variable

// document.write(`juan tiene; $`  + juan  + `<br>`);
// document.write(`luis tiene; $` + luis  + `<br>`);
// document.write(`marco tiene; $` + marco  + `<br>`);

//creo una lista de helados con los precios

let chocolito = 300;
let heladoVainilla = 400;
let lollyPop = 600;
let centella = 750;
let smash = 800;

// crear un sistema de puertas con if / else if / else

if (juan >= 800 )    {
    document.write(`Juan ¡ te alcanza para un smash    <br>
    y te quedan $ ${juan - 800}   <br>`);
}
else if(juan >= 750 )   {
    document.write(`Juan ¡ te alcanza para un centella <br>
    y te quedan $ ${juan - 750}   <br>`);
}
else if(juan >= 600 )   {
    document.write(`Juan ¡ te alcanza para un lollypop <br>
    y te quedan $ ${juan - 600}   <br>`);
}
else if(juan >= 400 )   {
    document.write(`Juan ¡ te alcanza para un helado de vainilla   <br>
    y te quedan $ ${juan - 400}   <br>`);
}
else if(juan >= 300 )   {
    document.write(`Juan ¡ te alcanza para un helado de chocolito  <br>
    y te quedan $ ${juan - 300}   <br>`);
}
else {
    document.write(`Juan ¡ no te alcanza para nada :C  <br>`);
}



if (luis >= 800 )    {
    document.write(`Luis ¡ te alcanza para un smash    <br>
    y te quedan $ ${luis - 800} <br>`);
}
else if(luis >= 750 )   {
    document.write(`Luis ¡ te alcanza para un centella <br>
    y te quedan $ ${luis - 750} <br>`);
}
else if(luis >= 600 )   {
    document.write(`Luis ¡ te alcanza para un lollypop <br>
    y te quedan $ ${luis - 600} <br>`);
}
else if(luis >= 400 )   {
    document.write(`Luis ¡ te alcanza para un helado de vainilla   <br>
    y te quedan $ ${luis - 400} <br>`);
}
else if(luis >= 300 )   {
    document.write(`Luis ¡ te alcanza para un helado de chocolito  <br>
    y te quedan $ ${luis - 300} <br>`);
}
else {
    document.write(`Luis ¡ no te alcanza para nada :C  <br>`);
}



if (marco >= 800 )    {
    document.write(`Marco ¡ te alcanza para un smash    <br>
    y te quedan $ ${marco - 800}   <br>`);
}
else if(marco >= 750 )   {
    document.write(`Marco ¡ te alcanza para un centella <br>
    y te quedan $ ${marco - 750}   <br>`);
}
else if(marco >= 600 )   {
    document.write(`Marco ¡ te alcanza para un lollypop <br>
    y te quedan $ ${marco - 600}   <br>`);
}
else if(marco >= 400 )   {
    document.write(`Marco ¡ te alcanza para un helado de vainilla   <br>
    y te quedan $ ${marco - 400}   <br>`);
}
else if(marco >= 300 )   {
    document.write(`Marco ¡ te alcanza para un helado de chocolito  <br>
    y te quedan $ ${marco - 300}   <br>`);
}
else {
    document.write(`Marco ¡ no te alcanza para nada :C  <br>`);
}

//ahora quieren saber cuanto les queda de vuelto


// ejercicio finalizado con exito.