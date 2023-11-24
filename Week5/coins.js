function coins(input) {

    let change = Number(input[0]);
    change = (change * 100).toFixed(2); // turning leva to stotinki

    let coins = 0;

    while (change > 0) {

        if (change - 200 >= 0) {
            coins++;
            change -= 200;

        } else if (change - 100 >= 0) {
            coins++;
            change -= 100;

        } else if (change - 50 >= 0) {
            coins++;
            change -= 50;

        } else if (change - 20 >= 0) {
            coins++;
            change -= 20;

        } else if (change - 10 >= 0) {
            coins++;
            change -= 10;

        } else if (change - 5 >= 0) {
            coins++;
            change -= 5;

        } else if (change - 2 >= 0) {
            coins++;
            change -= 2;

        } else if (change - 1 >= 0) {
            coins++;
            change -= 1;

        }

    }

    console.log(coins);

}

coins(["1.23"]);