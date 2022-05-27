const userInput = document.querySelector('.user-input');
const userAmount = document.querySelector('.user-amount');
const userButton = document.querySelector('button');

const message = this.alert;

const alert = (input, amount = 1) => {
    message(`${input} ${amount}`);
    amount = amount - 1;
    
    if(amount > 0) {
        alert(input, amount);
    }
}

userButton.addEventListener('click', function(){
    if(!userInput.value.length) return alert("Please insert text!")
    if(!userInput.value.length) return alert("Please insert amount");
    
    alert(userInput.value, parseInt(userAmount.value));
})