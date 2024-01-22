
const userInput = document.querySelector('.user-input');
const keys = document.querySelectorAll('.key');
const resetKey = document.querySelector('.reset-key');
const answerKey = document.querySelector(".answer-key");
const deleteKey = document.querySelector('.delete-key');

let lastKeyIsOperator = false;
let decimalAdded = false;



resetKey.addEventListener('click', () => {
    userInput.value = '';
});

// console.log(keysArray);
// console.log(keys);

const keysArray = Array.from(keys);

keysArray.forEach((key) => {
    key.addEventListener("click", (event) => {
        
        const value = event.target.innerText;
        
        if (value === "." && decimalAdded) {
            return;                  //one number cannot have multiple decimal
        }

        if ("+-*/".includes(value)) {
            if (lastKeyIsOperator) {
                let initialValue = userInput.value;
                let updateValue = initialValue.substring(0, initialValue.length - 1) + value;
                userInput.value = updateValue;
                return;
            }
            lastKeyIsOperator = true;
            decimalAdded = false;
        }else {
            lastKeyIsOperator = false;
            if(value===".")
            {
                decimalAdded = true
            }
        }
        userInput.value += value;
    })
})


//delete key

deleteKey.addEventListener("click",()=>{
    userInput.value = userInput.value.substring(0,userInput.value.length-1)
})


//answer key 

answerKey.addEventListener("click",()=>{
    const expression = userInput.value;
    // const formatedExpression = expression.replace("x","*");
    const result = eval(expression);
    userInput.value = result
})