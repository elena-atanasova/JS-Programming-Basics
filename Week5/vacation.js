function vacation(input) {

    let vacationPrice = Number(input[0]);
    let savings = Number(input[1]);

    let i = 2;
    let j = 3;
    let action = input[i];   // save or spend
    let moneyToUse = Number(input[j]);

    let daysSpend = 0;
    let daysAll = 0;

    while (daysSpend < 5) {

        if (action === "spend") {
            daysSpend++;
            savings -= moneyToUse;

            if (savings < 0) {
                savings = 0;
            }

        } else if (action === "save") {

            daysSpend = 0;      // 5 following days
            savings += moneyToUse;

        }

        daysAll++;
        i += 2;
        j += 2;
        action = input[i];
        moneyToUse = Number(input[j]);

        if (savings >= vacationPrice) {
            console.log(`You saved the money for ${daysAll} days.`);
            break;
        }

    }

    if (daysSpend >= 5) {
        console.log(`You can't save the money.`);
        console.log(daysAll);
    }
}

vacation(["10", "0", "spend", "1", "spend", "1", "spend", "1", "save", "9", "spend", "1", "spend", "1", "spend", "1", "spend", "1", "spend", "1"]);