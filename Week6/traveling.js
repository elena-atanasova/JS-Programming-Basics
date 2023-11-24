function travelling(input) {

    let i = 0

    let destination = input[i];
    i++;

    let savings = 0;

    while (destination !== "End") {

        let moneyNeeded = Number(input[i]);
        i++;

        while (savings < moneyNeeded) {
            
            let moneyToSave = Number(input[i]);
            savings += moneyToSave;

            if (savings >= moneyNeeded) {
                savings = 0;
                console.log(`Going to ${destination}!`);
                break;
            }
            
            i++;
            moneyToSave = input[i];
        }

        i++;
        destination = input[i];

        i++
        moneyNeeded = input[i];
    }
}

travelling(["Greece", "1000", "200", "200", "300", "100", "150", "240", "Spain", "1200", "300", "500", "193", "423", "End"]);