# Calculator
A  simple calculator that can: add, subtract, multiply and divide




### Credits
Photo by <a href="https://unsplash.com/@roman_lazygeek?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Roman Mager</a> on <a href="https://unsplash.com/s/photos/math?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  







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
            } else {
                firstNum = answer;
            } 
        }
        console.log(`First number is: ${firstNum}`);

        //locking current operator
        currentOperator = operatorChoice(operator);
        console.log(`Current operator: ${currentOperator}`);

        //ridding the screen of firstNum
        backgroundValue.textContent = firstNum + ' ' + operator.textContent;
        currentValueDisplay.textContent = currentScreenValue;
        console.log(firstNum, currentOperator, secondNum, answer);
        answer = 0;
        currentScreenValue = '';
});
});
