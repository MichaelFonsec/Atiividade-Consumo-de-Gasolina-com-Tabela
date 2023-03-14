// This is a JavaScript file

function teste(){
  alert("Olá Mundo");
}


function calcularconsumo(){

var km, gas, consumo

 km = document.getElementById('km').value
 gas = document.getElementById('consumo').value

 consumo = km / gas
 
let frase = `O Consumo de Gasolina é de: ${consumo}KM/L`;
 //alert(consumo);
document.querySelector('h2').innerHTML= frase;


const tabela = document.getElementById('consumo');{

var cor1 = document.getElementById("parte1");
var cor2 = document.getElementById("parte2");
var cor3 = document.getElementById("parte3");
var cor4 = document.getElementById("parte4");



  if(consumo >= 20) {
    cor1.style.backgroundColor = "green";
   }
    else if ((consumo < 20) && (consumo >= 12)){
    
     cor2.style.backgroundColor = "#90ee90";
    }
    else if ((consumo >= 8) && (consumo < 12)){

    cor3.style.backgroundColor= "orange";
    }
    else if ( consumo < 8){
    cor4.style.backgroundColor = "red";
    }


}

}


