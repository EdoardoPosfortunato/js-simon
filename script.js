// Prelevo il form

const formName = document.getElementById("numeriInseriti");

// Prelevo elementi da compilare //

let numeriRandomList = document.querySelector(".numeriDaRicordare ul");
let numeriDaInserire = document.getElementById("numeriDaInserire")


// Prelevo gli oggetti per INPUT del DOM

const numInput1 = document.getElementById("num1");
const numInput2 = document.getElementById("num2");
const numInput3 = document.getElementById("num3");
const numInput4 = document.getElementById("num4");
const numInput5 = document.getElementById("num5");

console.log(numInput1)


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
    numeriRandomList.appendChild(li);

    // creati i numeri ////
}

console.log(randomArray)

let liElement = numeriRandomList.getElementsByTagName("li")


// funzione - sparizione dei numeri - e sostituirli con tipiacerebbe in HTML

/* setTimeout(sparire, 3000);

function sparire() {
    numeriRandomList.style = "display: none;";

    for (let i = 0; i < liElement.length; i++) {
        liElement[i].textContent = "ti piacerebbe"
    }

    numeriDaInserire.style = "display: block"

} */

let arrayNumInseriti = [];


    formName.addEventListener("submit", submitForm)

    function submitForm(event){

        event.preventDefault(); // ferma il ricaricamento della pagina
    
        // prelevo gli input


        let numero1 = numInput1.value;
        let numero2 = numInput2.value;
        let numero3 = numInput3.value;
        let numero4 = numInput4.value;
        let numero5 = numInput5.value;

        arrayNumeInseriti = [numero1, numero2, numero3, numero4, numero5]
        console.table(arrayNumInseriti)

        
    }




  

