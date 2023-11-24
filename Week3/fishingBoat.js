function fishingBoat(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let peopleNumber = Number(input[2]);

    let shipRent = 0;

    let price = 0;

    switch (season) {
        case "Spring": shipRent = 3000; break;
        case "Summer":
        case "Autumn": shipRent = 4200; break;
        case "Winter": shipRent = 2600; break;
        default: console.log("error"); break;
    }

    if (peopleNumber <= 6) shipRent = 0.90 * shipRent;
    if (peopleNumber > 6 && peopleNumber <= 11) shipRent = 0.85 * shipRent;
    if (peopleNumber > 11) shipRent = 0.75 * shipRent;

    if (season !== "Autumn" && peopleNumber % 2 === 0) {
        shipRent = 0.95 * shipRent;
    }

    if (shipRent > budget) {

        console.log(`Not enough money! You need ${(shipRent - budget).toFixed(2)} leva.`);

    } else {

        console.log(`Yes! You have ${(budget - shipRent).toFixed(2)} leva left.`);
    }
}

fishingBoat(["2000", "Winter", "13"]);