function tournamentOfChristmas(input) {

    let numberOfTournaments = Number(input[0]);

    let i = 1;
    let gameName = input[i];
    i++;

    let moneyWon = 0;
    let countWins = 0;
    let countLosts = 0;

    while (gameName !== "Finish") {

        let result = input[i];  // win or lose
        i++;

        if (result === "win") {
            moneyWon += 20;
            countWins++;
        }


    }

    console.log(moneyWon);  // for the day

    if (countWins > countLosts) {
        monyWon = moneyWon * 1.10;
    }


}