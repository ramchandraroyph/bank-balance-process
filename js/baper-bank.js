/* 
1. At first i heve to get the button id and have add addEvenListener
*/
document.getElementById('btn-submit').addEventListener('click',function(){
    // console.log('btn clicked');
/* 
2. Have to get the inpute field id.
3. To get the value have to wright .value
*/
const emailField=document.getElementById('user-email');
const email=emailField.value;
// console.log(email);
/* 
4. To get the password field. And always remember that add .value to get the inpute field value.
*/
const passwordField=document.getElementById('user-password');
const password=passwordField.value;
// console.log(password);

if(email==='ramchandraraybd@gmail.com' && password==='12345'){
    window.location.href='bank-inside.html';
}
else{
    alert('tui password vule gecheis ja tor kono jayga nei ekhane. ami toke dekhte chai na ar amr samne theke tui ja');
}
})