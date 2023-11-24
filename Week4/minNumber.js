function minNumber(input) {

    let num = Number(input[0]);
    let minNum = Number(input[1]);

    for (let i = 1; i <= num; i++) {

        let currNumber = Number(input[i]);
    
        if (currNumber < minNum) {
            minNum = currNumber
        }
    }

    console.log(minNum);

}

minNumber(["3", "-20", "-40", "-30"]);