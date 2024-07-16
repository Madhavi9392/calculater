document.getElementById('calcForm').addEventListener('submit', function(event) {
    event.preventDefault();


            const firstNumber = parseFloat(document.getElementById('firstNumber').value);
            const operator = document.getElementById('operator').value;
            const secondNumber = parseFloat(document.getElementById('secondNumber').value);
    let result;

    switch (operator) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            result = firstNumber / secondNumber;
            break;
        default:
            result = 'Invalid operator';
    }
    

    document.getElementById('result').innerHTML = `Result: ${result}`;
});

