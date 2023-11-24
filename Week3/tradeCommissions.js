function tradeCommissions(data) {

    let town = data[0];
    let sells = Number(data[1]);

    let c = 0;


    if (town === "Sofia" && sells > 0) {

        if (sells >= 0 && sells <= 500) {
            c = 0.05 * sells;
        }

        if (sells > 500 && sells <= 1000) {
            c = 0.07 * sells;
        }

        if (sells > 1000 && sells <= 10000) {
            c = 0.08 * sells;
        }

        if (sells > 10000) {
            c = 0.12 * sells;
        }

        console.log(c.toFixed(2));

    } else if (town === "Varna" &&sells>0) {

        if (sells >= 0 && sells <= 500) {
            c = 0.045 * sells;
        }

        if (sells > 500 && sells <= 1000) {
            c = 0.075 * sells;
        }

        if (sells > 1000 && sells <= 10000) {
            c = 0.10 * sells;
        }

        if (sells > 10000) {
            c = 0.13 * sells;
        }

        console.log(c.toFixed(2));

    } else if (town === "Plovdiv" && sells >0) {

        if (sells >= 0 && sells <= 500) {
            c = 0.055 * sells;
        }

        if (sells > 500 && sells <= 1000) {
            c = 0.08 * sells;
        }

        if (sells > 1000 && sells <= 10000) {
            c = 0.12 * sells;
        }

        if (sells > 10000) {
            c = 0.145 * sells;
        }

        console.log(c.toFixed(2));


    } else {
        console.log("error");
    }

}

tradeCommissions(["Sofia", "1500"]);