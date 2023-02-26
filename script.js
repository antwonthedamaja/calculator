//listen
const buttons = document.querySelectorAll(".buttons");
const display = document.querySelector("#display");
//variables
let inputDisplay;
let input1;
let input2;
let operand;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.id === 'clear') { //clear
            display.textContent = "0.000000";
            inputDisplay = undefined;
            input1 = undefined;
            input2 = undefined;
            operand = undefined;
        } else if (button.id === 'lights') { //party time, do later
            alert('not implemented yet, sorry')
        } else if (button.id === 'music') { //party time, do later
            alert('not implemented yet, sorry')
        } else if (button.id === 'equals' && operand && input2 !== undefined) { //click equals with operand
            operate();
            operand = undefined;
        } else if ((button.id === 'equals' && !operand) //do nothing / bugfix line
            || (inputDisplay === undefined && button.className === 'buttons operand')
            || (input2 === undefined && operand && button.className === 'buttons operand')) {
            //click equals, no operand; click operand, no input; operand twice
        } else if (button.className === 'buttons operand' && !operand) { //click 1st operand
            input1 = display.textContent;
            operand = button.id;
            inputDisplay += button.textContent;
            display.textContent = inputDisplay;
        } else if (button.className === 'buttons operand' && operand) { //click 2nd operand
            operate();
            operand = button.id;
            inputDisplay += button.textContent;
            display.textContent = inputDisplay;
        } else if (!operand) { //click a number/decimal point without an operand
            inputDisplay === undefined ? inputDisplay = button.textContent : inputDisplay += button.textContent;
            display.textContent = inputDisplay;
        } else if (input2 === undefined) { //click a number/decimal after 1st operand, 1st iteration only
            input2 = button.textContent;
            inputDisplay += button.textContent;
            display.textContent = inputDisplay;
        } else { //click a number/decimal after 1st operand
            input2 += button.textContent;
            inputDisplay += button.textContent;
            display.textContent = inputDisplay;
        }
    });
});

function operate() {
    let divide0;
    let displayStore;
    if (operand === "add") {
        displayStore = parseFloat(input1) + parseFloat(input2);
        inputDisplay = displayStore.toFixed(6);
    } else if (operand === "subtract") {
        displayStore = parseFloat(input1) - parseFloat(input2);
        inputDisplay = displayStore.toFixed(6);
    } else if (operand === "multiply") {
        displayStore = parseFloat(input1) * parseFloat(input2);
        inputDisplay = displayStore.toFixed(6);
    } else if (operand === "divide" && input2 === '0') {
        display.textContent = "NICE TRY!";
        divide0 = true;
    } else {
        displayStore = parseFloat(input1) / parseFloat(input2);
        inputDisplay = displayStore.toFixed(6);
    }

    if (!divide0) {
    input1 = inputDisplay;
    input2 = undefined;
    display.textContent = inputDisplay;
    } else {
    inputDisplay = undefined;
    input1 = undefined;
    input2 = undefined;
    operand = undefined;
    divide0 = false;
    }
}