// listen
const buttons = document.querySelectorAll(".buttons");
const display = document.querySelector("#display");
// variables
let calcDisplay;
let usrInput1;
let usrInput2;
let operand;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.id === 'clear') { // clear
            display.textContent = "0.000000";
            calcDisplay = undefined;
            usrInput1 = undefined;
            usrInput2 = undefined;
            operand = undefined;
        } else if (button.id === 'lights') { // do later
            alert('not implemented yet, sorry')
        } else if (button.id === 'music') { // do later
            alert('not implemented yet, sorry')
        } else if (button.id === 'equals' && operand && usrInput2 !== undefined) { // click equals with operand
            operate();
            operand = undefined;
        } else if ((button.id === 'equals' && !operand) // do nothing / bugfix line
            || (calcDisplay === undefined && button.className === 'buttons operand')
            || (usrInput2 === undefined && operand && button.className === 'buttons operand')) {
            // click equals, no operand; click operand, no input; operand twice
        } else if (button.className === 'buttons operand' && !operand) { // click 1st operand
            usrInput1 = display.textContent;
            operand = button.id;
            calcDisplay += button.textContent;
            display.textContent = calcDisplay;
        } else if (button.className === 'buttons operand' && operand) { // click 2nd operand
            operate();
            operand = button.id;
            calcDisplay += button.textContent;
            display.textContent = calcDisplay;
        } else if (!operand) { // click a number/decimal point without an operand
            calcDisplay === undefined ? calcDisplay = button.textContent : calcDisplay += button.textContent;
            display.textContent = calcDisplay;
        } else { // click a number/decimal after 1st operand, 1st iteration only
            usrInput2 === undefined ? usrInput2 = button.textContent : usrInput2 += button.textContent;
            calcDisplay += button.textContent;
            display.textContent = calcDisplay;
        }
    });
});

function operate() {
    let divide0;
    if (operand === "add") {
        calcDisplay = parseFloat(usrInput1) + parseFloat(usrInput2);
    } else if (operand === "subtract") {
        calcDisplay = parseFloat(usrInput1) - parseFloat(usrInput2);
    } else if (operand === "multiply") {
        calcDisplay = parseFloat(usrInput1) * parseFloat(usrInput2);
    } else if (operand === "divide" && usrInput2 === '0') {
        display.textContent = "NICE TRY!";
        divide0 = true;
    } else {
        calcDisplay = parseFloat(usrInput1) / parseFloat(usrInput2);
    }
    calcDisplay = calcDisplay.toFixed(6);

    if (!divide0) {
    usrInput1 = calcDisplay;
    usrInput2 = undefined;
    display.textContent = calcDisplay;
    } else {
    calcDisplay = undefined;
    usrInput1 = undefined;
    usrInput2 = undefined;
    operand = undefined;
    divide0 = false;
    }
}