// Prelevo il form

const formName = document.getElementById("numeriInseriti");

// Prelevo elementi da compilare //

const buttonStart = document.getElementById("startBtn");
const countdownStart = document.getElementById("countDownStart");
const prelDivision = document.getElementById("preliminary");
let numeriRandomList = document.querySelector(".numeriDaRicordare ul");
let numeriDaRicordare = document.querySelector(".numeriDaRicordare");
let numeriDaRicordareTitolo = document.querySelector(".numeriDaRicordare h2");
let numeriLista = document.querySelector(".numeriDaRicordare ul li");
let numeriDaInserire = document.getElementById("numeriDaInserire")
let numeriIndovinati = document.getElementById("numeriIndovinati")
let risultato = document.getElementById("risultato")


// Prelevo gli oggetti per INPUT del DOM

const numInput1 = document.getElementById("num1");
const numInput2 = document.getElementById("num2");
const numInput3 = document.getElementById("num3");
const numInput4 = document.getElementById("num4");
const numInput5 = document.getElementById("num5");




let countDownNumber = 6;
let countdownValid = true;
let countdownInterval = null;

buttonStart.addEventListener("click", startCountdown);

function startCountdown() {
    if (countDownNumber => 0 && countdownValid === true && countdownInterval === null) {
        countdownInterval = setInterval(() => {
            countDownNumber--;
            countdownStart.innerText = countDownNumber;
            buttonStart.style.display = "none";

            if (countDownNumber < 0) {
                clearInterval(countdownInterval);
                countdownInterval = null;
                countdownValid = false;
                prelDivision.style.display = "none";
                numeriDaRicordare.style.display = "block"
            }
        }, 1000);
    }
}

// Funzione che fa iniziare i gioco // 
// Aggiungere al contDown della funzione Sparire 6 secondi del contDownStart //


buttonStart.addEventListener("click", startGame);

function startGame() {
let numeriRandom = [];


// creao Randoma Array di numeri da ricordare e li stampo in pagina //
const randomArray = [];

for (let i = 0; i < 5; i++) {

    let numero = Math.floor((Math.random() * 100 + 1)); //creo numero random
    randomArray.push(numero); // lo inserisco in un Array per successivo copntrollo

    // creo la lista di numeri random in HTML
    const li = document.createElement("li");
    li.textContent = numero;
    li.classList = "col form-control mx-3"
    numeriRandomList.appendChild(li);

    // creati i numeri ////
}



let liElement = numeriRandomList.getElementsByTagName("li")

// funzione - sparizione dei numeri - e sostituirli con tipiacerebbe in HTML

setTimeout(sparire, 10000); // aggiungere 6 secondi del contodwn inizale

function sparire() {
    numeriDaRicordare.style = "display: none;";
    numeriRandomList.innerHTML = ""


    numeriDaInserire.style = "display: block"

}


// funzione - sparizione dei numeri - e sostituirli con tipiacerebbe in HTML



let arrayNumInseriti = [];
const btn = document.getElementById("confermBtn");
const btn2 = document.getElementById("reloadBtn");


formName.addEventListener("submit", submitForm)

function submitForm(event) {

    event.preventDefault(); // ferma il ricaricamento della pagina
    // btn.disabled = true;
    // prelevo gli input


    let numero1 = numInput1.value;
    let numero2 = numInput2.value;
    let numero3 = numInput3.value;
    let numero4 = numInput4.value;
    let numero5 = numInput5.value;

    arrayNumInseriti = [numero1, numero2, numero3, numero4, numero5]
    console.table(arrayNumInseriti)

    console.log(randomArray)
    console.log(arrayNumInseriti)

    // Esecuzione logica conteggio numeri indovinati e quali //

    let cont = 0;
    let arrayUguale = []


    for (let i = 0; i < arrayNumInseriti.length; i++) {

        for (let n = 0; n < randomArray.length; n++) {

            if (arrayNumInseriti[i] == randomArray[n]) {

                let giàPresente = false;

                for (let k = 0; k < arrayUguale.length; k++) {
                    if (arrayUguale[k] == arrayNumInseriti[i]) {
                        giàPresente = true;
                        break;
                    }

                }
                if (giàPresente == false) {

                    arrayUguale.push(arrayNumInseriti[i]);
                    cont++;

                }
            }
        }
    }




    risultato.textContent = `Hai indovinato ${cont} numeri e sono ${arrayUguale}`;



    numeriDaRicordare.style.display = "block";
    numeriDaRicordareTitolo.textContent = "I Numeri Erano"



    for (let i = 0; i < 5; i++) {

        // creo la lista di numeri random in HTML
        const li = document.createElement("li");
        li.textContent = randomArray[i];
        li.classList = "col form-control mx-3"
        numeriRandomList.appendChild(li);


    }

    btn.style = "display:none"
    btn2.style = "display:block"
    btn2.textContent = "Try again ...";
    btn2.addEventListener("click", function () {
        location.reload();

    })
}

}