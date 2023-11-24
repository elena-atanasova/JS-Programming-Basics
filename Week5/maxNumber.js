function maxNumber(data) {

    let command = data[0];
    let maxNum = Number.MIN_SAFE_INTEGER;

    let i = 1;
    while (command !== "Stop") {

        let num = Number(command);

        if (num > maxNum) {
            maxNum = num; 
        }

        command = data[i];
        i++;

    }

    console.log(maxNum);

}

maxNumber(["100", "99", "580", "70", "Stop"]);