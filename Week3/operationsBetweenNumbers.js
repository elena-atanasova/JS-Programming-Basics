function operationsBetweenNumbers(input) {

    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let operator = input[2];

    let result = 0;
    let resultType = null;

    switch (operator) {
        case "+": result = n1 + n2; break;
        case "-": result = n1 - n2; break;
        case "*": result = n1 * n2; break;
        case "/":
            if (n2 === 0) {
                console.log(`Cannot divide ${n1} by zero`);
            } else {
                result = n1 / n2;
            } break;

        case "%":
            if (n2 === 0) {
                console.log(`Cannot divide ${n1} by zero`);
            } else {
                result = n1 % n2;
            }
            break;
        default: console.log("error"); break;
    }

    if (operator === "+" || operator === "-" || operator === "*") {

        if (result % 2 === 0) {
            resultType = "even";

        } else {
            resultType = "odd";

        }

        console.log(`${n1} ${operator} ${n2} = ${result} - ${resultType}`);

    } else if (operator === "/" && n2 !== 0) {

        console.log(`${n1} / ${n2} = ${result.toFixed(2)}`);

    } else if (operator === "%" && n2 !== 0) {

        console.log(`${n1} % ${n2} = ${result}`);

    } 

}

operationsBetweenNumbers(["10", "0", "/"]);