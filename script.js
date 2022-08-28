//Constants
const nums = document.querySelectorAll('.num');
const screen = document.querySelector('.screen');
const currentValueDisplay = document.querySelector('.currentValue');
const backgroundValue = document.querySelector('.backgroundValue');

const operators = document.querySelectorAll('.operator');
const equalSign = document.querySelector('.equal');

const allClear = document.querySelector('.allClear');
const deleteChar = document.querySelector('.deleteChar');

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
        //locking firstNum in place
        firstNum = Number(currentScreenValue);
        console.log(`First number is: ${firstNum}`);

        //locking current operator
        currentOperator = operatorChoice(operator);
        console.log(`Current operator: ${currentOperator}`);

        //dojdodjd

    });
});

equalSign.addEventListener('click', ()=>{
    secondNum = Number(currentScreenValue);
    answer = operate(currentOperator, firstNum, secondNum);
    currentValueDisplay.textContent = answer;
    currentScreenValue = answer;
});

//REMOVING DATA
allClear.addEventListener('click', ()=>{
    currentScreenValue = '';
    currentValueDisplay.textContent = currentScreenValue;

});

deleteChar.addEventListener('click', ()=>{
    let currentValueArray = (currentScreenValue).split('')
    currentValueArray.pop()
    currentScreenValue = currentValueArray.join('');
    currentValueDisplay.textContent = currentScreenValue;

});

//Object
function calculation(firstNum){
    this.num1 = firstNum;
    this.operator = currentOperator;

}

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




// firstNum = Number(currentScreenValue);
//         currentScreenValue = '';
//         currentValueDisplay.textContent = '';
