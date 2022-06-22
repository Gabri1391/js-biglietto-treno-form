const message = 'Il prezzo del biglietto é di €'
discountMessage = 'Ti è stato applicato uno sconto del '

const ticketParagraph = document.getElementById('ticket-price');
const buttonIcon = document.getElementById('button');


buttonIcon.addEventListener('click', function() {
    const nameEl = document.getElementById('name').value;
    const kmEl = document.getElementById('km').value;
    const ageEl = document.getElementById('age').value;
    
    console.log(nameEl);
    console.log(kmEl);
    console.log(ageEl);
    
    let price = parseInt(0.21 * kmEl);
    let hasDiscount = false;

    if (ageEl ==2){
        hasDiscount = true;
        discountMessage += '20%';
        price *= 0.8; 
     }else if (ageEl ==3){
         hasDiscount = true;
         discountMessage += '40%';
         price *= 0.6; 
     }

     ticketParagraph.innerText = message + price.toFixed(2);
     document.getElementById('discount').innerText = '';
     
     if (hasDiscount){
         document.getElementById('discount').innerText = '';
         document.getElementById('discount').innerText = discountMessage;
         discountMessage = 'Ti è stato applicato uno sconto del '
     }  
});