
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
  b. Istruzioni per calcolare il prezzo
  c. Stampare in pagina con massimo due decimali
*/



// Definire le variabili dell'utente

const userKm = prompt("Inserisci i chilometri (espressi in numero decimale) che percorrerai.");
const userAge = prompt("Inserisci la tua età (sempre in numero decimale). La useremo per calcolare gli sconti a tua disposizione (se sei una signora promettiamo di non dirlo a nessuno)")

console.log("Chilometri (km)", userKm);
console.log("Età", userAge);

