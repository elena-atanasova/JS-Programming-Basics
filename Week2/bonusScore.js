function bonusScore(input) {

    let score = Number(input[0]);

    let bonus = 0.0;

    if(score <= 100) {
        bonus = 5;

    } else if (score > 100 && score < 1000) {
        bonus = 0.20 * score;

    } else if (score > 1000) {
        bonus = 0.10 * score;

    }

    let bonusAdditional = 0;

    if(score % 2 === 0) {               // check if number is even
        bonusAdditional = 1;

    } else if (score % 10 === 5) {      // check if number ends with 5
        bonusAdditional = 2;

    }

    let bonusAll = bonus + bonusAdditional;
    let scoreFinal = score + bonusAll;

    console.log(bonusAll);
    console.log(scoreFinal);

}

bonusScore(["15875"]);