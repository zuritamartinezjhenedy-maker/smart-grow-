const consejos=[

{

titulo:"💧 Riego Inteligente",

texto:"El riego automático evita el desperdicio de agua y mantiene la humedad adecuada para el crecimiento de las plantas."

},

{

titulo:"🌞 Luz Solar",

texto:"La mayoría de las verduras necesitan entre 6 y 8 horas de luz solar diariamente."

},

{

titulo:"🌱 Humedad",

texto:"El sensor de humedad permite regar únicamente cuando el suelo realmente lo necesita."

},

{

titulo:"🥬 Fertilizantes",

texto:"Aplicar fertilizantes naturales mejora el crecimiento y la calidad de los cultivos."

},

{

titulo:"🍅 Temperatura",

texto:"Controlar la temperatura ayuda a prevenir enfermedades y favorece el desarrollo saludable de las plantas."

},

{

titulo:"🌿 Beneficio Ambiental",

texto:"El uso de sistemas automatizados reduce el consumo de agua y protege el medio ambiente."

}

];

let posicion=0;

mostrar();

function mostrar(){

document.getElementById("tituloConsejo").innerHTML=

consejos[posicion].titulo;

document.getElementById("textoConsejo").innerHTML=

consejos[posicion].texto;

}

function siguienteConsejo(){

posicion++;

if(posicion>=consejos.length){

posicion=0;

}

mostrar();

}

function anteriorConsejo(){

posicion--;

if(posicion<0){

posicion=consejos.length-1;

}

mostrar();

}