const calculator {
    displayNumber: '0';
    operator: null;
    firtsNumber: null;
    waitingForSecondNumber: false;
}

function updateDisplay() {
    document.querySelector("#displayNumber").innerText = calculator.displayNumber;
}

function clearCalculator() {
    calculator.displayNumber = '0';
    calculator.operator = null;
    calculator.firtsNumber = null;
    calculator.waitingForSecondNumber = false;
}

function inputDigit(digit) {
    calculator.displayNumber += digit;
}

const buttons = document.querySelectorAll(".button");
for (let button of buttons) {
    button.addEventListener('click', function (event) {

        // mendapatkan objek elemen yang diklik
        const target = event.target;

        inputDigit(target.innerText);
        updateDisplay()
    });
}