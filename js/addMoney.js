/**
 * 1. add event listener to the add money button 
 * make sure to preventdefault so that page doesnot 
 * reloads
 * 
 * 2.get the money user wants to add, also get the pin 
 * number provide
 * 
 * 3. verify thr pin number. for, wrong pin number ==> 
 * failed to add for right number, allow to add
 * the number to account balance
 * 
 * 4. get the current balance
 * 
 * 5. add money to be added with the current balance
 * 
 * 6. display / update the balance in the DOM/UI
 * 
 * 
 */
 
document.getElementById('btn-add-money').addEventListener('click',function(event){
    // prevent page reload after form submit
    event.preventDefault();

//  get money and the pin number

const addMoneyInput = document.getElementById('input-add-money').value;


const pinNumberInput = document.getElementById('input-pin-number').value;

// console.log(addMoneyInput,pinNumberInput);



// verify the pin number
if (pinNumberInput=== '1234'){
    // console.log('added money');

    // step-4: get the current balance
    const balance = document.getElementById('account-balance').innerText; 


    // step 05: addd money to the main account
    const addBalance = parseFloat(addMoneyInput);
    const addMoney = parseFloat(balance);

    const newAccount = addBalance+ addMoney;
    // console.log(newAccount);



    // step 06: update the balance

document.getElementById('account-balance').innerText = newAccount;    
}
else{
   alert('error')
}

});










 