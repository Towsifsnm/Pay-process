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



// verify the pin number
if (pinNumberInput=== '1234'){
    console.log('added money');

    // step-4: get the current balance
    const balance = document.getElementById('account-balance').innerText; 


    // step 05: addd money to the main account
    const addBalance = parseFloat(addMoneyInput);
    const addMoney = parseFloat(balance);

    const newAccount = addBalance+ addMoney;
    console.log(newAccount);



    // step 06: update the balance

document.getElementById('account-balance').innerText = newAccount;    
}
else{
   alert('error')
}

});