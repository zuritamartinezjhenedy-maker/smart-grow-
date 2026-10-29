function ingresar(){

let usuario=document.getElementById("usuario").value;

let clave=document.getElementById("clave").value;

if(usuario=="admin" && clave=="1234"){

window.location="bienvenida.html";

}

else{

document.getElementById("mensaje").innerHTML="Usuario o contraseña incorrectos";

document.getElementById("mensaje").style.color="red";

}

}