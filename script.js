//listen
const buttons = document.querySelectorAll(".buttons");
const display = document.querySelector("#display");
//variables
let input1;
let input2;
let operand;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.id === 'clear') { //clear
            display.textContent = "000000";
            input1 = undefined;
            input2 = undefined;
            operand = undefined;
        } else if (button.id === 'equals' && operand && input2 !== undefined) { //click equals with operand
            operate();
            operand = undefined;
        } else if ((button.id === 'equals' && !operand) //do nothing / bugfix line
            || (input1 === undefined && button.className === 'buttons operand')
            || (operand && button.className === 'buttons operand')) {
            //click equals, no operand; click operand, no input; operand twice
        } else if (button.className === 'buttons operand' && !operand) { //click 1st operand
            operand = button.id;
            display.textContent += button.textContent;
        } else if (button.className === 'buttons operand' && operand) { //click 2nd operand
            operate();
            operand = button.id;
            display.textContent += operand;
        } else if (!operand) { //click a number/decimal point without an operand
            input1 === undefined ? input1 = button.textContent : input1 += button.textContent;
            display.textContent = input1;
        } else if (input2 === undefined) { //click a number/decimal point after 1st operand
            input2 = button.textContent;
            display.textContent += input2;
        } else { //the problem is here
            input2 += button.textContent
            display.textContent += input2;
        }
    });
});

function operate() {
    let divide0;
    if (operand === "add") {
        input1 = parseFloat(input1) + parseFloat(input2);
    } else if (operand === "subtract") {
        input1 = parseFloat(input1) - parseFloat(input2);
    } else if (operand === "multiply") {
        input1 = parseFloat(input1) * parseFloat(input2);
    } else if (operand === "divide" && input2 === '0') {
        display.textContent = "NICE TRY!";
        divide0 = true;
    } else {
        input1 = parseFloat(input1) / parseFloat(input2);
    }

    if (!divide0) {
    input2 = undefined;
    display.textContent = input1;
    } else {
    input1 = undefined;
    input2 = undefined;
    operand = undefined;
    divide0 = false;
    }
}