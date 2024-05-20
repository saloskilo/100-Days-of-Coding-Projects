const increaseInputValue=document.getElementById('btnIncrease')
const decreaseInputValue=document.getElementById('btnDecrease')
const spanCounter=document.getElementById('counter')


let counter=0;

function increaseValue(){
    var  increase=counter++;
    console.log(increase);
    spanCounter.innerText = counter;

}

function decreaseValue(){
    var  decrease=counter--;
    console.log(decrease);
    spanCounter.innerText = counter;

}

increaseInputValue.addEventListener('click',increaseValue);
decreaseInputValue.addEventListener('click',decreaseValue);