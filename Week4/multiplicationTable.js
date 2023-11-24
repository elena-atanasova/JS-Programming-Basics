function multiplicationTable(data) {

    let num = Number(data[0]);
    let result = 0;

    for (let i = 1; i <= 10; i++) {

        result = num * i;
        console.log(`${i} * ${num} = ${result}`);

    }

}

multiplicationTable(["5"]);