

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
