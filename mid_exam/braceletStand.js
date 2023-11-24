function braceletStand(input) {

    let moneyPerDay = Number(input[0]);
    let moneyEarnedPerDay = Number(input[1]);

    let moneySpend = Number(input[2]);
    let giftPrice = Number(input[3]);

    let money = (moneyPerDay * 5 + moneyEarnedPerDay * 5) - moneySpend;

    if (money >= giftPrice) {
        console.log(`Profit: ${money.toFixed(2)} BGN, the gift has been purchased.`);

    } else {
        console.log(`Insufficient money: ${(giftPrice - money).toFixed(2)} BGN.`);
    }
}

braceletStand(["2.10", "17.50", "20.20", "148.50"]);