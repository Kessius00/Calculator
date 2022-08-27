//Constants
const nums = document.querySelectorAll('.num');
const screen = document.querySelector('.screen');
const currentValueDisplay = document.querySelector('.currentValue');
const operators = document.querySelectorAll('.operator');
const equalSign = document.querySelector('.equal');
let currentOperator;
let currentScreenValue = '';
let firstNum;
let secondNum;
let answer;


//addEventListeners
nums.forEach((num)=>{
    num.addEventListener('click', ()=>{
        currentScreenValue+=(num.textContent);
        currentValueDisplay.textContent = currentScreenValue;
    });
});

operators.forEach((operator)=>{
    operator.addEventListener('click',()=>{
        firstNum = Number(currentScreenValue);
        currentScreenValue = '';
        currentValueDisplay.textContent = '';
        switch(operator.textContent){
            case '+':
                currentOperator = 'add';
                break;
            case '-':
                currentOperator = 'subtract';
                break;
            case '×':
                currentOperator = 'multiply';
                break;
            case '÷':
                currentOperator = 'divide';
                break;
        };
    });
});

equalSign.addEventListener('click', ()=>{
    secondNum = Number(currentScreenValue);
    answer = operate(currentOperator, firstNum, secondNum);
    console.log(answer);
});




//Functions


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
