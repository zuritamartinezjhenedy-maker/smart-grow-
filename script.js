// Hora

function actualizarHora(){

let ahora=new Date();

document.getElementById("hora").innerHTML=

ahora.toLocaleString();

}

setInterval(actualizarHora,1000);

// Bluetooth

function conectarBluetooth(){

document.getElementById("bluetooth").innerHTML="Conectado";

alert("Bluetooth conectado");

}

// Encender bomba

function encenderRiego(){

document.getElementById("bomba").innerHTML="ENCENDIDA";

}

// Apagar bomba

function apagarRiego(){

document.getElementById("bomba").innerHTML="APAGADA";

}

// Valores simulados

setInterval(function(){

let humedad=Math.floor(Math.random()*40)+50;

let temperatura=Math.floor(Math.random()*8)+20;

document.getElementById("humedad").innerHTML=humedad+"%";

document.getElementById("temperatura").innerHTML=temperatura+"°C";

grafica.data.datasets[0].data.push(humedad);

grafica.data.labels.push("");

if(grafica.data.labels.length>10){

grafica.data.labels.shift();

grafica.data.datasets[0].data.shift();

}

grafica.update();

},3000);

// Gráfico

const ctx=document.getElementById("grafica");

const grafica=new Chart(ctx,{

type:"line",

data:{

labels:[""],

datasets:[{

label:"Humedad",

data:[65]

}]

}

});
// Historial

function agregarRegistro(texto){

let tabla=document.getElementById("tabla");

let fila=tabla.insertRow();

let hora=new Date().toLocaleTimeString();

fila.insertCell(0).innerHTML=hora;

fila.insertCell(1).innerHTML=texto;

}

function encenderRiego(){

document.getElementById("bomba").innerHTML="ENCENDIDA";

agregarRegistro("Riego Encendido");

}

function apagarRiego(){

document.getElementById("bomba").innerHTML="APAGADA";

agregarRegistro("Riego Apagado");

}

// Nivel del tanque

setInterval(function(){

let agua=Math.floor(Math.random()*30)+70;

document.getElementById("agua").style.width=agua+"%";

document.getElementById("porcentajeAgua").innerHTML=agua+"%";

},6000);

// Alerta de humedad

setInterval(function(){

let humedad=parseInt(document.getElementById("humedad").innerHTML);

if(humedad<55){

alert("⚠ El suelo necesita riego.");

}

},10000);
//----------------------

// Bluetooth

//----------------------

function conectarBluetooth(){

document.getElementById("bluetooth").innerHTML="Conectado";

document.getElementById("textoBluetooth").innerHTML="Conectado";

document.getElementById("ledBluetooth").style.background="lime";

document.getElementById("ledBluetooth").style.boxShadow="0 0 20px lime";

alert("Bluetooth conectado correctamente");

}

//----------------------

// Estado del cultivo

//----------------------

setInterval(function(){

let humedad=parseInt(document.getElementById("humedad").innerHTML);

if(humedad>70){

document.getElementById("estadoCultivo").innerHTML="Excelente";

}

else if(humedad>55){

document.getElementById("estadoCultivo").innerHTML="Bueno";

}

else{

document.getElementById("estadoCultivo").innerHTML="Necesita Riego";

}

},3000);

//----------------------

// Modo Oscuro

//----------------------

function modoOscuro(){

document.body.classList.toggle("oscuro");

}