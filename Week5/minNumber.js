function minNumber(data) {

    let inputElement = data[0];
    let min = Number.MAX_SAFE_INTEGER;

    let i = 1;
    while (inputElement !== "Stop") {

        let num = Number(inputElement);

        if (num < min) {
            min = num;
        }

        inputElement = data[i];
        i++;

    }

    console.log(min);

}

minNumber(["-10", "20", "-30", "Stop"]);