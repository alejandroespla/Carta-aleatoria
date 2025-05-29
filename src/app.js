import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
 let palos = ['♦', '♥', '♠', '♣'];
 let numeros = ['A', '2' , '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K']
 
 let paloIndex = Math.floor(Math.random() * palos.length);
 let numeroIndex = Math.floor(Math.random() * numeros.length);

 let cardPalo = palos[paloIndex];
 let cardNumero = numeros[numeroIndex];

let color = (cardPalo === '♠' || cardPalo === '♣') ? 'black' : 'red';

 document.querySelectorAll('.palo').innerText = cardPalo;
  document.querySelectorAll('.palo').forEach((el) => {
    el.innerText = cardPalo;
    el.style.color = color;
  });

 document.querySelector('.number').innerText = cardNumero;

};

