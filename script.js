//Constants
const nums = document.querySelectorAll('.num');

const currentValueDisplay = document.querySelector('.currentValue');
const backgroundValue = document.querySelector('.backgroundValue');

const operators = document.querySelectorAll('.operator');
const equalSign = document.querySelector('.equal');

const allClear = document.querySelector('.allClear');
const deleteChar = document.querySelector('.deleteChar');

let currentOperator = '';
let currentScreenValue = '';
let firstNum = 0;
let secondNum = 0;
let mainScreenText = currentValueDisplay.textContent;
let answer = 0;

currentValueDisplay.textContent = firstNum;

//addEventListeners
nums.forEach((num)=>{
    num.addEventListener('click', ()=>{

        if (currentValueDisplay.textContent.length<13){
            if (answer){
                answer = 0;
            }
            //If the number is not to big (13 chars), operate
            //ADD number to currentScreenValue (string)
            currentScreenValue+=(num.textContent);
            //Change main display to CurrentScreenValue
            currentValueDisplay.textContent = currentScreenValue;

        } else {
            currentValueDisplay.textContent = 'Number too long!'
        };
    });
});

operators.forEach((operator)=>{
    operator.addEventListener('click',()=>{
        // locking firstNum in place
        if (!firstNum){
            firstNum = Number(currentScreenValue);
        } else if (!secondNum){
            //if you want to chain calculations
            secondNum = Number(currentScreenValue);

            if (!answer){
                //if no answer, make firstNum equal to first answer 
                answer = operate(currentOperator, firstNum, secondNum);
                firstNum = answer;
            } 
        }

        //locking next operator
        currentOperator = operatorChoice(operator);

        //ridding the screen of firstNum
        backgroundValue.textContent = firstNum + ' ' + operator.textContent;
        currentValueDisplay.textContent = currentScreenValue;
        answer = 0;
        secondNum = 0;
        currentScreenValue = '';
    });
});

equalSign.addEventListener('click', ()=>{
    console.log('inputOfEqualSign', firstNum, currentOperator, secondNum, answer, currentScreenValue);
    if ((currentOperator === 'divide') && (!secondNum)){
        //No dividing by 0
        currentValueDisplay.textContent = 'Infinity!';
        answer = 0;
    } 


    if (currentOperator === ''){
        //No operator selected means no secondNumber so only a number 
        
    } else {
        //operator selected
        
    
        //fetching answer with operator, first and second number
        //firstNum  currentOperator secondNum
        //removing currentOperator after final operation
        answer = operate(currentOperator, firstNum, secondNum);
        // currentOperator = ''

        //Change main value display and smaller display to the answer
        currentValueDisplay.textContent = answer;
        backgroundValue.textContent = answer;
    
    }
    currentScreenValue = ``;
    firstNum = 0;
    secondNum = 0;
    console.log('outputOfEqualSign', firstNum, currentOperator, secondNum, answer, currentScreenValue);
});


//REMOVING DATA
allClear.addEventListener('click', ()=>{
    currentScreenValue = '';
    currentValueDisplay.textContent = currentScreenValue;
    backgroundValue.textContent = '';
    firstNum = 0;
    secondNum = 0;
    answer = 0;
    currentValueDisplay.textContent = firstNum;

});

deleteChar.addEventListener('click', ()=>{
    if (Number(currentValueDisplay.textContent) === answer){
        alert('whoops');
    } else {
        let currentValueArray = (currentScreenValue).split('')
        currentValueArray.pop();
        currentScreenValue = currentValueArray.join('');
        currentValueDisplay.textContent = currentScreenValue;
    }

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



    // if ((!secondNum || secondNum === answer) && (firstNum)){
    //     // If first calculation and firstNum != 0                  
    //     secondNum = Number(currentScreenValue);
    // } 

    // if (!currentOperator){
    //     //No operator selected means no secondNumber so only a number 
    //     currentValueDisplay.textContent = secondNum;
    // } else {
    //     //operator selected
    //     if ((currentOperator === 'divide') && (secondNum === 0)){
    //         //No dividing by 0
    //         currentValueDisplay.textContent = 'Infinity!';
    //         firstNum = 0;
    //         secondNum = 0;
    //     } else {
    //         //fetching answer with operator, first and second number
    //         answer = operate(currentOperator, firstNum, secondNum);
    //         console.log(firstNum, currentOperator, secondNum, answer);

    //         //Change main value display and smaller display to the answer
    //         currentValueDisplay.textContent = answer;
    //         backgroundValue.textContent = answer;
    //     }
    // }

    // currentScreenValue = '';
