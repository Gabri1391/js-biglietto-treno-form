const message = 'Il prezzo del biglietto é di €'
let discountMessage = 'Ti è stato applicato uno sconto del '

const ticketParagraph = document.getElementById('ticket-price');
const buttonIcon = document.getElementById('button');
const nameEl = document.getElementById('name');
const kmEl = document.getElementById('km');
const ageEl = document.getElementById('age');


// - Creare la funzione per calcolare il prezzo al km
let price = parseInt(0.21 * kmEl)


// -Test per verificare se l'utente ha diritto allo sconto
let hasDiscount = false;

if (age < 18){
   hasDiscount = true;
   discountMessage += '20%'
   price *= 0.8; 
}else if (age > 65){
    hasDiscount = true;
    discountMessage += '40%'
    price *= 0.6; 
}

// -Decidere se mostrare la frase dello sconto

// - Stampare il risultato in pagina


// 6- Evento

buttonIcon.addEventListener('click', function() {
    console.log(nameEl.value);
    console.log(kmEl.value);
    console.log(ageEl.value);
     ticketParagraph.innerText = message + price.toFixed(2);
     if (hasDiscount){
         document.getElementById('discount').innerText = discountMessage;
     }
})