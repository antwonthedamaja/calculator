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
            display.textContent = "";
            input1 = undefined;
            input2 = undefined;
            operand = undefined;
        } else if (button.id === 'equals' && operand) { //click equals with operand
            operate();
            operand = undefined;
        } else if (button.id === 'equals' && !operand) { //click equals, no operand
            //do nothing
        } else if (button.className === 'buttons operand' && !operand) { //click 1st operand
            operand = button.id;
            display.textContent += button.textContent;
        } else if (button.className === 'buttons operand' && operand) { //click 2nd operand
            operate();
            operand = button.id;
        } else if (!operand) { //click a number/decimal point without an operand
            input1 === undefined ? input1 = button.textContent : input1 += button.textContent;
            display.textContent = input1;
        } else { //click a number/decimal point after 1st operand
            input2 === undefined ? input2 = button.textContent : input2 += button.textContent;
            display.textContent += input2;
        }
    });
});

function operate() {
    if (operand === "add") {
        input1 = parseFloat(input1) + parseFloat(input2);
    } else if (operand === "subtract") {
        input1 = parseFloat(input1) - parseFloat(input2);
    } else if (operand === "multiply") {
        input1 = parseFloat(input1) * parseFloat(input2);
    } else if (operand === "divide") {
        input1 = parseFloat(input1) / parseFloat(input2);
    }
    input2 = undefined;
    display.textContent = input1;
}