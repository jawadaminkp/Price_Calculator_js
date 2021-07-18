// grab everything we need

const priceInput = document.querySelector('[name=price]');
const quantityInput = document.querySelector('[name=quantity]');
const total = document.querySelector('.total');
const qtyLabel = document.querySelector('.qty-label');


// create functions we need

//calculate burger cost

calculateBurgerCost();

function calculateBurgerCost(){
    const price = priceInput.value;
    const qty = quantityInput.value;
    const cost = price * qty;

    total.innerText = 'PKR ' +cost.toFixed(2);
}

function updateQtyLabel(){
    const qty = quantityInput.value;
    qtyLabel.innerText = qty;
    
}


// add our event listeners 



priceInput.addEventListener('input', calculateBurgerCost);
quantityInput.addEventListener('input', calculateBurgerCost);
quantityInput.addEventListener('input', updateQtyLabel);
