// console.log("hi dear")
// step -1 : add event handler to the add money button inside the form
document.getElementById('btn-add-money').addEventListener('click',function(event){
    // prevent page reload after form submit
    event.preventDefault();

// s-2: get amount to be added to the account 

const addMoneyInput = document.getElementById('input-add-money').value;


// get the pin number
const pinNumberInput = document.getElementById('input-pin-number').value;

console.log(addMoneyInput,pinNumberInput);

});