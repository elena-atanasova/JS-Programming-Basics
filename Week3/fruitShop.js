function fruitShop(data) {

    let fruit = data[0];
    let day = data[1];
    let amount = data[2];

    let price = 0;
    let finalPrice = 0;

    if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {

        if (fruit === "banana" || fruit === "apple" || fruit === "orange" || fruit === "grapefruit" || fruit === "kiwi"
            || fruit === "pineapple" || fruit === "grapes") {

            switch (fruit) {
                case "banana": price = 2.50; break;
                case "apple": price = 1.20; break;
                case "orange": price = 0.85; break;
                case "grapefruit": price = 1.45; break;
                case "kiwi": price = 2.70; break;
                case "pineapple": price = 5.50; break;
                case "grapes": price = 3.85; break;
                default: console.log("error"); break;

            }

            finalPrice = amount * price;
            console.log(finalPrice.toFixed(2));

        } else {
            console.log("error");

        }

    } else if (day === "Saturday" || day === "Sunday") {

        if (fruit === "banana" || fruit === "apple" || fruit === "orange" || fruit === "grapefruit" ||
            fruit === "kiwi" || fruit === "pineapple" || fruit === "grapes") {

            switch (fruit) {
                case "banana": price = 2.70; break;
                case "apple": price = 1.25; break;
                case "orange": price = 0.90; break;
                case "grapefruit": price = 1.60; break;
                case "kiwi": price = 3.00; break;
                case "pineapple": price = 5.60; break;
                case "grapes": price = 4.20; break;
                default: console.log("error"); break;

            }

            finalPrice = amount * price;
            console.log(finalPrice.toFixed(2));

        } else {

            console.log("error");

        }


    } else {
        console.log("error");

    }
}

fruitShop(["tomato", "Saturday", "0.5"]);