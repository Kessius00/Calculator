//Constants
const nums = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.operator');
const equalSign = document.querySelector('.equal');
const allClear = document.querySelector('.allClear');
const deleteChar = document.querySelector('.deleteChar');

const currentValueDisplay = document.querySelector('.currentValue');
const backgroundValue = document.querySelector('.backgroundValue');


let firstNum = '';
let secondNum = '';
let currentOperation = null;


//addEventListeners

window.addEventListener('keydown', handleKeyboardInput);
// equalSign.addEventListener('click', evaluate);
allClear.addEventListener('click', clear);
// deleteChar.addEventListener('click', deleteNumber);


nums.forEach((num)=>{
    num.addEventListener('click', ()=>{
        if (currentValueDisplay.textContent.length<13){
            appendNumber(num.textContent);
        } else {
            currentValueDisplay.textContent = 'Number too long!'
            clear();
        };
    });
});

//Functions

function clear(){
    firstNum = '';
    secondNum = '';
    currentOperation = null;
    backgroundValue.textContent = '';
    currentValueDisplay.textContent = firstNum;
}

function appendNumber(num){
    if (secondNum === ''){
        firstNum += num;
        currentValueDisplay.textContent = firstNum;
    } else if (currentOperation !== null && firstNum !== ''){
        secondNum += num;
        currentValueDisplay.textContent = secondNum;
    }
}


function handleKeyboardInput(e){
    
    if (e.key >= 0 && e.key <=9) appendNumber(e.key);

    switch (e.key){
        case 'Enter':
            console.log('enter');
            break;
        case 'Backspace':
            console.log('backspace');
            break;
        case 'Escape':
            console.log('escape');
            break;
        case '/':
            currentOperation = ''
            console.log('divide');

            break;
        case '*':
            console.log('multiply');

            break;
        case '+':
            console.log('plus');

            break;
        case '-':
            console.log('minus');

            break; 
        
    }
}

function operate(operator, num1, num2){
    let answer;

    switch(operator){
        case 'add':
            answer = add(num1, num2);
            break;
        case 'subtract':
            answer = subtract(num1, num2);
            break;
        case 'multiply':
            answer = multiply(num1, num2);
            break;
        case 'divide':
            answer = divide(num1, num2);
            break;
    }

    return answer;
}

function operatorChoice(operatorSymbol){
    let currentOperation;
    switch(operatorSymbol.textContent){
    case '+':
        currentOperation = 'add';
        break;
    case '-':
        currentOperation = 'subtract';
        break;
    case '×':
        currentOperation = 'multiply';
        break;
    case '÷':
        currentOperation = 'divide';
        break;
    };
    return currentOperation;
}

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1*num2;
}

function divide(num1, num2){
    return num1/num2;
}