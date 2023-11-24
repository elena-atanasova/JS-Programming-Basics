function smallShop(data) {

    let product = data[0];
    let town = data[1];
    let amount = Number(data[2]);

    let price = 0;

    if (town === "Sofia") {

        switch (product) {
            case "coffee": price = 0.50; break;
            case "water": price = 0.80; break;
            case "beer": price = 1.20; break;
            case "sweets": price = 1.45; break;
            case "peanuts": price = 1.60; break;
            default: console.log("No such product!"); break;
        }

    } else if (town === "Plovdiv") {

        switch (product) {
            case "coffee": price = 0.40; break;
            case "water": price = 0.70; break;
            case "beer": price = 1.15; break;
            case "sweets": price = 1.30; break;
            case "peanuts": price = 1.50; break;
            default: console.log("No such product!"); break;
        }

    } else if (town === "Varna") {

        switch (product) {
            case "coffee": price = 0.45; break;
            case "water": price = 0.70; break;
            case "beer": price = 1.10; break;
            case "sweets": price = 1.35; break;
            case "peanuts": price = 1.55; break;
            default: console.log("No such product!"); break;
        }
    }

    finalPrice = amount * price;

    console.log(finalPrice);
}

smallShop(["sweets", "Sofia", "2.23"]);