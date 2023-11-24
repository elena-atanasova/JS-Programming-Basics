function skiTrip(data) {

    let days = Number(data[0]);
    let accommodationType = data[1];
    let feedback = data[2];

    let price = 0;

    if (accommodationType === "room for one person") {
        price = (days - 1) * 18.00;     // 11 days = 10 sleeps

        if (feedback === "positive") {
            price += 0.25 * price;

        } else if (feedback === "negative") {
            price -= 0.10 * price;
        }

    } else if (accommodationType === "apartment") {
        price = (days - 1) * 25.00;

        if ((days - 1) < 10) {
            price -= 0.30 * price;
        } else if ((days - 1) > 10 && (days - 1) <= 15) {
            price -= 0.35 * price;
        } else if ((days - 1) > 15) {
            price -= 0.50 * price;
        }

        if (feedback === "positive") {
            price += 0.25 * price;

        } else if (feedback === "negative") {
            price -= 0.10 * price;
        }
    } else if (accommodationType === "president apartment") {
        price = (days - 1) * 35.00;

        if ((days - 1) < 10) {
            price -= 0.10 * price;
        } else if ((days - 1) > 10 && (days - 1) <= 15) {
            price -= 0.20 * price;
        } else if ((days - 1) > 15) {
            price -= 0.20 * price;
        }

        if (feedback === "positive") {
            price += 0.25 * price;

        } else if (feedback === "negative") {
            price -= 0.10 * price;
        }
    }

    console.log(price.toFixed(2));
}

skiTrip(["2", "apartment", "positive"]);