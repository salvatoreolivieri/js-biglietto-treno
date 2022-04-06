
// Calcolo del prezzo del biglietto del treno


/* Consegna:

  1. Chiedere info all’utente (numero di chilometri che vuole percorrere + età passeggero)

  2. Calcolare il prezzo totale del viaggio

    Regole: 
    - Prezzo = 0.21 € al km
    - Sconto del 20% per i minorenni
    - Sconto del 40% per gli over 65.
*/


/* Key Point:

  a. Definire le variabili dell'utente (chilometri da percorrere ed età)
  b. Inserire degli alert nel caso non vengano scritti dei numeri decimali
  c. Istruzioni per calcolare il prezzo
  d. Stampare in pagina con massimo due decimali
*/



// a. Definire le variabili dell'utente
// b. Inserire degli alert nel caso non vengano scritti dei numeri decimali

const userKm = prompt("Inserisci i chilometri (espressi in numero decimale) che percorrerai.");

if (isNaN(userKm)){
  alert("Attenzione inserisci un numero decimale");
}


const userAge = prompt("Inserisci la tua età (sempre in numero decimale). La useremo per calcolare gli sconti a tua disposizione (se sei una signora promettiamo di non dirlo a nessuno)");

if (isNaN(userAge)){
  alert("Attenzione inserisci un numero decimale");
}


console.log("Chilometri (km)", userKm);
console.log("Età", userAge);



// c. Istruzioni per calcolare il prezzo (+ regola approssimazione dei decimali)

let Price18_65 = 0.21 * userKm; 
Price18_65 = Price18_65.toFixed(2);

let PriceUnder18 = Price18_65 * 0.8;
PriceUnder18 = PriceUnder18.toFixed(2);

let PriceOver65 =  Price18_65 * 0.6;
PriceOver65 = PriceOver65.toFixed(2);


console.log("Prezzo (€)", Price18_65);
console.log("Prezzo per under 18 (€)", PriceUnder18);
console.log("Prezzo per over 65 (€)", PriceOver65);



// d. Stampare in pagina

if(userAge < 18){
  document.getElementById("output").innerHTML = `Caro viaggiatore, questo è il prezzo del tuo biglietto ${PriceUnder18}€. <br> Ci auguriamo tu possa trascorrere uno splendido viaggio in orario (non come con trenitalia). <br> A presto!`;

} else if (userAge > 65){
  document.getElementById("output").innerHTML = `Caro viaggiatore, questo è il prezzo del tuo biglietto ${PriceOver65}€. <br> Ci auguriamo tu possa trascorrere uno splendido viaggio in orario (non come con trenitalia). <br> A presto!`;

} else {
  document.getElementById("output").innerHTML = `Caro viaggiatore, questo è il prezzo del tuo biglietto ${Price18_65}€. <br> Ci auguriamo tu possa trascorrere uno splendido viaggio in orario (non come con trenitalia). <br> A presto!`;
}