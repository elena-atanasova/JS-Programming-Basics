function hairSalon(input) {

    let goal = Number(input[0]);

    let i = 1;
    let command = input[i];

    let price = 0;
    let sum = 0;

    while (command !== "closed") {

        if (command === "haircut") {

            i++;
            command = input[i];

            if (command === "ladies") {
                price = 20;

            } else if (command === "mens") {
                price = 15;

            } else if (command === "kids") {
                price = 10;

            }
        }

        if (command === "color") {

            i++;
            command = input[i];

            if (command === "touch up") {
                price = 20;

            } else if (command === "full color") {
                price = 30;

            }
        }

        sum += price;

        i++;
        command = input[i];


        if (sum >= goal) {
            console.log("You have reached your target for the day!");
            console.log(`Earned money: ${sum}lv.`);
            break;
        }

    }

    if (command === "closed") {
        
            console.log(`Target not reached! You need ${(Math.abs(sum - goal)).toFixed(0)}lv. more.`);
            console.log(`Earned money: ${sum}lv.`);

    }

}

hairSalon(["50", "color", "full color", "haircut", "ladies"]);