function journey(input) {

    let budget = Number(input[0]);
    let season = input[1];

    let holidayType = null;
    let destination = null;

    let holidayPrice = 0;


    if (budget <= 100) {

        destination = "Bulgaria";

        if (season === "summer") {

            holidayType = "Camp";
            holidayPrice = 0.30 * budget;

        } else {

            holidayType = "Hotel";
            holidayPrice = 0.70 * budget;

        }

    } else if (budget <= 1000) {

        destination = "Balkans";

        if (season === "summer") {

            holidayType = "Camp";
            holidayPrice = 0.40 * budget;

        } else {
            holidayType = "Hotel";
            holidayPrice = 0.80 * budget;
        }

    } else if (budget > 1000) {

        destination = "Europe";
        holidayType = "Hotel";
        holidayPrice = 0.90 * budget;

    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${holidayType} - ${holidayPrice.toFixed(2)}`);

}

journey(["678.53", "winter"]);