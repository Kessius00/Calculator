//Constants
const nums = document.querySelectorAll('.num');
// const screen = document.querySelector('.screen');
const currentValueDisplay = document.querySelector('.currentValue');
const backgroundValue = document.querySelector('.backgroundValue');

const operators = document.querySelectorAll('.operator');
const equalSign = document.querySelector('.equal');

const allClear = document.querySelector('.allClear');
const deleteChar = document.querySelector('.deleteChar');

let currentOperator;
let currentScreenValue = '';
let firstNum = 0;
let secondNum = 0;
let answer;

currentValueDisplay.textContent = firstNum;
//addEventListeners
nums.forEach((num)=>{
    num.addEventListener('click', ()=>{
        if (!currentValueDisplay.textContent){
            currentScreenValue.textContent = '';
        }
        currentScreenValue+=(num.textContent);
        currentValueDisplay.textContent = currentScreenValue;
    });
});

operators.forEach((operator)=>{
    operator.addEventListener('click',()=>{
        //locking firstNum in place
        if (!firstNum){
            firstNum = Number(currentScreenValue);
        } else {
            //if you want to chain calculations
            secondNum = Number(currentScreenValue);
            if (!answer){
                firstNum = operate(currentOperator, firstNum, secondNum);
            } else {
                firstNum = answer;
            } 
            
        }
        console.log(`First number is: ${firstNum}`);

        //locking current operator
        currentOperator = operatorChoice(operator);
        console.log(`Current operator: ${currentOperator}`);

        //ridding the screen of firstNum
        currentScreenValue = '';
        backgroundValue.textContent = firstNum + ' ' + operator.textContent;
        currentValueDisplay.textContent = '';

    });
});

equalSign.addEventListener('click', ()=>{
    //locking secondNumber in place
    if (!secondNum || secondNum === answer){
        secondNum = Number(currentScreenValue);
    }
    

    if (!currentOperator){
        currentValueDisplay.textContent = 0;
        currentScreenValue = '';

    } else {
    //fetching answer
    answer = operate(currentOperator, firstNum, secondNum);

    console.log(firstNum, currentOperator, secondNum, answer);

    currentValueDisplay.textContent = answer;
    currentScreenValue = answer;
    }
});


//REMOVING DATA
allClear.addEventListener('click', ()=>{
    currentScreenValue = '';
    currentValueDisplay.textContent = currentScreenValue;
    backgroundValue.textContent = '';
    firstNum = 0;
    secondNum = 0;
    currentValueDisplay.textContent = firstNum;

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



