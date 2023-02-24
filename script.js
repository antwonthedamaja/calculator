const buttons = document.querySelectorAll(".buttons");
const display = document.querySelector("#display")
let input;
let operandCounter;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.id === 'clear') {
            display.textContent = '';
        } else if (button.id === 'music') {
            alert('Feature not implemented yet');
        } else if (button.id === 'lights') {
            alert('Feature not implemented yet');
        } else if (button.id === 'enter') {
            operate();
        } else {
            if (button.classList) {

            } else {
            display.textContent += button.textContent;
            input = display.textContent;
            }
        }
    });
});

function operate() {
    if (input.includes("+") === true) {
        input => {
            
        }
    }
}