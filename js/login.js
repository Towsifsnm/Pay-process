// // console.log('hlw my dear')

// // step 01   event handaler 
// document.getElementById('button-login').addEventListener('click',function(event){
//     // step 02   prevent default bahavior(prevent reloading browser)
//     event.preventDefault();  
//     // console.log('login button clicked')



//     // step 03    get the phone number
// const phoneNumber = document.getElementById('phone-number').value;
// const pinNumber = document.getElementById('pin-number').value;
// console.log(phoneNumber,pinNumber);

// // step 04 validate phone and pin
// if (phoneNumber=== '6' && pinNumber==='1234'){
//     console.log('you are logged in');
// }
// // step 05 allow user to use the website
// slse {
//     alert ('Wrong phone number or pin')
// }
// })


document.getElementById('button-login').addEventListener('click', function(event){
    event.preventDefault();


// get phone number and pin
const phoneNumber = document.getElementById('phone-number').value;
const pinNumber = document.getElementById('pin-number').value;


// bad way to validate

if (phoneNumber==='5' && pinNumber==='1234'){
    console.log('you are logged in');
    window.location.href = '/home.html';
}
else {
    alert('Wrong number or pin');
}

});