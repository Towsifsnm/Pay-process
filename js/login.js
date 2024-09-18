// console.log('hlw my dear')

// step 01   event handaler 
document.getElementById('button-login').addEventListener('click',function(event){
    // step 02   prevent default bahavior(prevent reloading browser)
    event.preventDefault();  
    console.log('login button clicked')



    // step 03    get the phone number
const phoneNumber = document.getElementById('phone-number').value;

console.log(phoneNumber);

})


