function calculate() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let op = document.getElementById("operator").value;
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "❌ Please enter valid numbers.";
    } else {
        switch (op) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                result = num2 !== 0 ? num1 / num2 : "❌ Cannot divide by zero";
                break;
            default:
                result = "❓ Invalid operation";
        }
    }

    document.getElementById("result").innerText = `Result: ${result}`;
}
