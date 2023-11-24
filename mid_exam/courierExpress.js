function courierExpress(input) {

    let weight = Number(input[0]);
    let type = input[1];
    let distance = Number(input[2]);

    let price = 0;

    switch (type) {

        case "standard":

            if (weight < 1) {
                price += 0.03 * distance;
            } else if (weight >= 1 && weight < 10) {
                price += 0.05 * distance;
            } else if (weight >= 10 && weight < 40) {
                price += 0.10 * distance;
            } else if (weight >= 40 && weight < 90) {
                price += 0.15 * distance;
            } else if (weight >= 90 && weight < 150) {
                price += 0.20 * distance;
            }
            break;

        case "express":

            if (weight < 1) {
                let extraMoney = 0.80 * 0.03;
                price += 0.03 * distance + extraMoney * weight * distance;

            } else if (weight >= 1 && weight < 10) {
                let extraMoney = 0.40 * 0.05;
                price += 0.05 * distance + extraMoney * weight * distance;

            } else if (weight >= 10 && weight < 40) {
                let extraMoney = 0.05 * 0.10;
                price += 0.10 * distance + extraMoney * weight * distance;

            } else if (weight >= 40 && weight < 90) {
                let extraMoney = 0.02 * 0.15;
                price += 0.15 * distance + extraMoney * weight * distance;

            } else if (weight >= 90 && weight < 150) {
                let extraMoney = 0.01 * 0.20;
                price += 0.20 * distance + extraMoney * weight * distance;

            }
            break;

    }

    console.log(`The delivery of your shipment with weight of ${weight.toFixed(3)} kg. would cost ${price.toFixed(2)} lv.`);
}

courierExpress(["1.5", "standard", "100"]);