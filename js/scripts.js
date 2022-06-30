let currentNumberWrapper = document.getElementById('currentNumber'); //local aonde quero mostrar o valor em tempo real


let currentNumber = 0; 
//o valor começando em 0

function increment(){
    currentNumber = currentNumber + 1;//0 = 0 + 1 = 1;
    currentNumberWrapper.innerHTML = currentNumber; //joga o valor 1 no local aonde ele vai ficar armazenado.
    
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}
