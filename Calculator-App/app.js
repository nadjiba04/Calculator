let display = document.getElementById('display');
let darkMode = false;

function appendToDisplay(value) {
    display.value += value;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    display.value = '';
}

function switchMode() {
    darkMode = !darkMode;
    const body = document.body;
    const calculator = document.querySelector('.calculator');
    const calInput= document.querySelector('.display');
    const buttons = document.querySelectorAll('button');

    if (darkMode) {
        body.style.backgroundColor = '#333';
        calculator.style.backgroundColor = '#333';
        calculator.style.boxShadow = '5px 5px 15px #111, -5px -5px 15px #555';
        calInput.style.backgroundColor = '#fff';
        buttons.forEach(button => {
            button.style.backgroundColor = '#444';
            button.style.color = '#fff';
        });
    } else {
        body.style.backgroundColor = '#f0f0f0';
        calculator.style.backgroundColor = '#f0f0f0';
        calculator.style.boxShadow = '5px 5px 15px #bfbfbf, -5px -5px 15px #ffffff';
        calInput.style.backgroundColor = '#000';
        buttons.forEach(button => {
            button.style.backgroundColor = '#f0f0f0';
            button.style.color = '#000';
        });
    }
}
