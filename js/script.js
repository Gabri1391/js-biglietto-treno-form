const message = 'Il prezzo del biglietto é di €'
let discountMessage = 'Ti è stato applicato uno sconto del '

const ticketParagraph = document.getElementById('ticket-price');
const buttonIcon = document.getElementById('button');


buttonIcon.addEventListener('click', function() {
    const nameEl = document.getElementById('name').value;
    const kmEl = document.getElementById('km').value;
    const ageEl = document.getElementById('age').value;
    
    console.log(nameEl.value);
    console.log(kmEl.value);
    console.log(ageEl.value);
    
    let price = parseInt(0.21 * kmEl);
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

     ticketParagraph.innerText = message + price.toFixed(2);
     if (hasDiscount){
         document.getElementById('discount').innerText = discountMessage;
     }
});