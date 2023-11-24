function metricConverter(input) {

    let num = Number(input[0]);
    let entry = input[1];
    let out = input[2];

    if(entry === "mm" && out === "m") {
        num /= 1000;

    } else if (entry === "mm" && out === "cm") {
        num /= 10;

    } else if (entry === "cm" && out === "m") {
        num /= 100;

    } else if (entry === "cm" && out === "mm") {
        num *= 10;

    } else if (entry === "m" && out === "cm") {
        num *= 100;

    } else if (entry === "m" && out === "mm") {
        num *= 1000;
    }

    console.log(num.toFixed(3));

}

metricConverter(["45","cm","mm"]);