function cleverLily(input) {

    let age = Number(input[0]);
    let priceWashingMachine = Number(input[1]);
    let priceToy = Number(input[2]);

    let sum = 0;
    let money = 10;

    for (let i = 1; i <= age; i++) {

        if (i % 2 !== 0) {
            // toys
            sum += priceToy;

        } else if (i % 2 === 0) {
            // money
            sum += money;
            money += 10;

            sum--;       // her brother steals 1 lv.

        }
    }

    let difference = Math.abs(sum - priceWashingMachine);

    if (sum < priceWashingMachine) {

        console.log(`No! ${difference.toFixed(2)}`);

    } else if (sum >= priceWashingMachine) {

        console.log(`Yes! ${difference.toFixed(2)}`);

    }

}

cleverLily(["21", "0", "3"]);