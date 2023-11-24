function factorial(data) {

    let num = Number(data[0]);
    let sum = 1;

    for (let i = num; i > 0; i--) {

        sum *= i;

    }

    console.log(sum);

}

factorial(["8"]);