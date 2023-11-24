function newHouse(data) {

    let flowerType = data[0];
    let flowerNum = Number(data[1]);
    let budget = Number(data[2]);

    let totalPrice = 0;

    if (flowerType === "Roses") {

        totalPrice = flowerNum * 5;

        if (flowerNum > 80) {
            totalPrice = 0.90 * totalPrice;
        }

    } else if (flowerType === "Dahlias") {

        totalPrice = flowerNum * 3.80;

        if (flowerNum > 90) {
            totalPrice = 0.85 * totalPrice;
        }

    } else if (flowerType === "Tulips") {

        totalPrice = flowerNum * 2.80;

        if (flowerNum > 80) {
            totalPrice = 0.85 * totalPrice;
        }

    } else if (flowerType === "Narcissus") {

        totalPrice = flowerNum * 3;

        if (flowerNum < 120) {
            totalPrice = 1.15 * totalPrice;
        }
    } else if (flowerType === "Gladiolus") {

        totalPrice = flowerNum * 2.50;

        if (flowerNum < 80) {
            totalPrice = 1.20 * totalPrice;
        }
    }

    if (totalPrice <= budget) {

        console.log(`Hey, you have a great garden with ${flowerNum} ${flowerType} and ${(budget - totalPrice).toFixed(2)} leva left.`);

    } else {

        console.log(`Not enough money, you need ${(totalPrice - budget).toFixed(2)} leva more.`);

    }
}

newHouse(["Tulips", "88", "260"]);