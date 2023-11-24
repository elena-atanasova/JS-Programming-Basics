function invalidNumber(data) {

    let num = Number(data[0]);

    if((num >= 100 && num <= 200) || num === 0) {

    } else {
        console.log("invalid");

    }
}

invalidNumber(["0"]);