// Prelevo il form
const numeriInseriti = document.getElementById("numeriInseriti");

// Prelevo elementi da compilare //

let numeriRandomElem = document.querySelector(".numeriDaRicordare ul");


// Prelevo gli oggetti per INPUT del DOM

const numInput1 = document.getElementById("num1");
const numInput2 = document.getElementById("num2");
const numInput3 = document.getElementById("num3");
const numInput4 = document.getElementById("num4");
const numInput5 = document.getElementById("num5");

console.log()


let numeriRandom = [];


// creao Randoma Array di numeri da ricordare e li stampo in pagina //
const randomArray = [];

for (let i = 0; i < 5; i++) {

    let numero = Math.floor((Math.random() * 100 + 1)); //creo numero random
    randomArray.push(numero); // lo inserisco in un Array per successivo copntrollo

    // creo la lista di numeri random in HTML
    const li = document.createElement("li");
    li.textContent = numero;
    li.classList = "listElement"
    numeriRandomElem.appendChild(li);
    // creati i numeri ////
}

console.log(randomArray)

