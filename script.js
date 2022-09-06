//Constants
const nums = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.operator');
const equalSign = document.querySelector('.equal');
const allClear = document.querySelector('.allClear');
const deleteCharButton = document.querySelector('.deleteChar');
const dot = document.querySelector('.dot');

const currentValueDisplay = document.querySelector('.currentValue');
const backgroundValue = document.querySelector('.backgroundValue');


let firstNum = '';
let secondNum = '';
let currentOperation = null;
let lastButtonPressed = null;
let operatorChosen;



//addEventListeners

window.addEventListener('keydown', handleKeyboardInput);
equalSign.addEventListener('click', evaluate);
allClear.addEventListener('click', clear);
deleteCharButton.addEventListener('click', deleteChar);

dot.addEventListener('click', addDot);

operators.forEach((operator)=>{
    operator.addEventListener('click', ()=>{
        operatorChoice(operator.textContent);
        doOperation(operator.textContent);
    })
});

nums.forEach((num)=>{
    num.addEventListener('click', ()=>{
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
function doOperation(operatorChosen){
    if (currentOperation !== null && secondNum !== ''){ //for continuing the calculation without equalSign
        firstNum = operate(currentOperation, Number(firstNum), Number(secondNum)).toString(); 
        currentValueDisplay.textContent = firstNum;
        secondNum = '';
    }
    lastButtonPressed = operatorChosen;
    if (operatorChosen == 'add') operatorChosen = '+';
    if (operatorChosen == 'subtract') operatorChosen = '-';
    if (operatorChosen == 'divide') operatorChosen = '÷';
    if (operatorChosen == 'multiply') operatorChosen = '×';
    backgroundValue.textContent = firstNum + ' ' + operatorChosen;
}

function evaluate(){
    if (currentOperation === null) return 
    if ( currentOperation === 'divide' && Number(secondNum) === 0){
        currentValueDisplay.textContent = 'Dividing by zero: infinity!';
        backgroundValue.textContent = '';
    } else {
        let answer = round(operate(currentOperation, Number(firstNum), Number(secondNum))).toString();
        clear();
        currentValueDisplay.textContent = answer;
        firstNum = answer;
        lastButtonPressed = '=';
    }
}

function addDot(){
    if (currentValueDisplay.textContent.includes('.')) return
    appendNumber('.');
    lastButtonPressed = '.';
}

function round(num){
    num *= 10**9;
    return Math.round(num)/(10**9)
}

function deleteChar(){
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
}


function clear(){
    firstNum = '';
    secondNum = '';
    currentOperation = null;
    backgroundValue.textContent = '';
    currentValueDisplay.textContent = '';
    lastButtonPressed = 'cl';
}

function appendNumber(num){
    if (lastButtonPressed === '='){
        clear();
    } 
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
    if (e.key === 'Enter') evaluate();
    if (e.key === 'Escape') clear();
    if (e.key === 'Backspace') deleteChar();
    if (e.key === '.') addDot();
    if (e.key === ',') addDot();
    if (e.key === '/') {doOperation('divide'); currentOperation = 'divide';}
    if (e.key === '*') {doOperation('multiply'); currentOperation = 'multiply';}
    if (e.key === '+') {doOperation('add'); currentOperation = 'add';}
    if (e.key === '-') {doOperation('subtract'); currentOperation = 'subtract';}
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