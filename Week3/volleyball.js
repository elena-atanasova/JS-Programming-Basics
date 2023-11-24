function volleyball(input) {

    let year = input[0];    // leap or normal
    let daysOff = Number(input[1]);
    let volleyballHome = Number(input[2]);    // plays volleyball at home - Sundays

    let weekendsSofia = 48 - volleyballHome;

    let volleyballSofia = (3 / 4) * weekendsSofia;      // in Sofia and not working; plays volleyball in Sofia
    let volleyballHoliday =  ( 2 / 3 ) * daysOff;       // plays volleyball during holidays

    let timeFinal = volleyballSofia + volleyballHoliday + volleyballHome;

    if (year === "leap") {

        timeFinal = 1.15 * timeFinal;

    }

    console.log(Math.floor(timeFinal));

}

volleyball(["normal", "6", "13"]);