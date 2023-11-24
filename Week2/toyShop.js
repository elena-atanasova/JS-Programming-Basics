function toyShop(input) {
    // Пъзел - 2.60 лв.
    // Говореща кукла - 3 лв.
    // Плюшено мече - 4.10 лв.
    // Миньон - 8.20 лв.
    // Камионче - 2 лв.

    let vacationPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dollCount = Number(input[2]);
    let bearCount = Number(input[3]);
    let minnionCount = Number(input[4]);
    let truckCount = Number(input[5]);

    let toysNumber = puzzleCount + dollCount + bearCount + minnionCount + truckCount;
    let toysPrice = puzzleCount * 2.60 + dollCount * 3.00 + bearCount * 4.10 + minnionCount * 8.20 + truckCount * 2.00;  // earned money

    if (toysNumber >= 50) {
        toysPrice = toysPrice - 0.25 * toysPrice;   // toysPrice * 0.75

    }

    // rent
    let rent = 0.10 * toysPrice;

    // final money after paying the rent
    let earnedMoney = toysPrice - rent;

    if(earnedMoney < vacationPrice) {
        let neededMoney = (vacationPrice - earnedMoney).toFixed(2);
        console.log(`Not enough money! ${neededMoney} lv needed.`);

    } else {
        let leftMoney = (earnedMoney - vacationPrice).toFixed(2);
        console.log(`Yes! ${leftMoney} lv left.`)
    }

}

toyShop(["40.8", "20", "25", "30", "50", "10"]);