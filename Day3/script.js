document.getElementById("calculate").addEventListener("click", () => {
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);
    let op = document.getElementById("operator").value;
    let result;

    switch (op) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = b !== 0 ? a / b : "Error: Division by zero";
            break;
        default:
            result = "Invalid operator";
    }

    document.getElementById("result").textContent = "Result: " + result;
});
