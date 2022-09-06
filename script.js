//Constants
const nums = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.operator');
const equalSign = document.querySelector('.equal');
const allClear = document.querySelector('.allClear');
const deleteChar = document.querySelector('.deleteChar');
const dot = document.querySelector('.dot');

const currentValueDisplay = document.querySelector('.currentValue');
const backgroundValue = document.querySelector('.backgroundValue');


let firstNum = '';
let secondNum = '';
let currentOperation = null;
let lastButtonPressed = null;



//addEventListeners

window.addEventListener('keydown', handleKeyboardInput);
equalSign.addEventListener('click', evaluate);
allClear.addEventListener('click', clear);
deleteChar.addEventListener('click', ()=>{
    if (lastButtonPressed === '='){
        clear();
    } else {
        let currentValueArray;
        if (secondNum === '' && currentOperation === null){
            currentValueArray = (firstNum).split('')
            currentValueArray.pop();
            currentValueDisplay.textContent = currentValueArray.join('');
            firstNum = currentValueDisplay.textContent;
        } else if (currentOperation !== null && firstNum !== ''){
            currentValueArray = (secondNum).split('')
            currentValueArray.pop();
            currentValueDisplay.textContent = currentValueArray.join('');
            secondNum = currentValueDisplay.textContent;
        }
    }
});

dot.addEventListener('click', ()=>{
    if (currentValueDisplay.textContent.includes('.')) return 
    appendNumber('.');
    lastButtonPressed = '.';
});

operators.forEach((operator)=>{
    operator.addEventListener('click', ()=>{
        if (currentOperation !== null && secondNum !== ''){ //for continuing the calculation without equalSign
            firstNum = operate(currentOperation, Number(firstNum), Number(secondNum)).toString(); 
            currentValueDisplay.textContent = firstNum;
            secondNum = '';
        }
        operatorChoice(operator.textContent);
        lastButtonPressed = operator.textContent;
        backgroundValue.textContent = firstNum + ' ' + operator.textContent;
    })
});

nums.forEach((num)=>{
    num.addEventListener('click', ()=>{
        if (lastButtonPressed === '='){
            clear();
        } 
        if (currentValueDisplay.textContent.length<13){
            appendNumber(num.textContent);
        } else {
            clear();
            currentValueDisplay.textContent = 'Number too long!';
        };
        lastButtonPressed = num.textContent;
    });
});

//Functions
function evaluate(){
    if (currentOperation === null) return 
    let answer = round(operate(currentOperation, Number(firstNum), Number(secondNum))).toString();
    clear();
    currentValueDisplay.textContent = answer;
    firstNum = answer;
    lastButtonPressed = '=';
}

function round(num){
    num *= 10**9;
    return Math.round(num)/(10**9)
}

function getCurrentNum(){
    if (secondNum === '' && currentOperation === null){
        return firstNum
    } 
    return secondNum
}

function clear(){
    firstNum = '';
    secondNum = '';
    currentOperation = null;
    backgroundValue.textContent = '';
    currentValueDisplay.textContent = firstNum;
}

function appendNumber(num){
    if (secondNum === '' && currentOperation === null){
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
            currentOperation = 'divide'
            console.log(currentOperation);

            break;
        case '*':
            currentOperation = 'multiply'
            console.log(currentOperation);


            break;
        case '+':
            currentOperation = 'add'
            console.log(currentOperation);

            break;
        case '-':
            currentOperation = 'subtract'
            console.log(currentOperation);

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
    switch(operatorSymbol){
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
}


//operations
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