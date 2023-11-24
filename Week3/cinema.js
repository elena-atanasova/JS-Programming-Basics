function cinema(input) {

    let type = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);

    let price = 0;
    let sum = 0;

    switch (type) {
        case "Premiere": price = 12; break;
        case "Normal": price = 7.50; break;
        case "Discount": price = 5.00; break;
        default: console.log("error"); break;
    }

    sum = rows * columns * price;

    console.log(`${sum.toFixed(2)} leva`);
}

cinema(["Discount", "12", "30"]);