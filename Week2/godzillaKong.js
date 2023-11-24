function godzillaKong(input) {

    let budget = Number(input[0]);
    let people = Number(input[1]);
    let clothesPrice = Number(input[2]);

    let decorations = 0.10 * budget;

    if(people > 150) {
        clothesPrice = 0.90 * clothesPrice;
    }

    let money = decorations + people * clothesPrice;

    if(money > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(money - budget).toFixed(2)} leva more.`);

    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - money).toFixed(2)} leva left.`);
    }
}

godzillaKong(["9587.88", "222", "55.68"]);