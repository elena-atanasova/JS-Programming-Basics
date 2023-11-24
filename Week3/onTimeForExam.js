function onTimeForExam(input) {

    let hourExam = Number(input[0]);
    let minExam = Number(input[1]);
    let hourArrival = Number(input[2]);
    let minArrival = Number(input[3]);

    // time in min
    let examTime = hourExam * 60 + minExam;

    // time in min
    let arrivalTime = hourArrival * 60 + minArrival;
    

    // on time
    if (hourExam === hourArrival && minExam == minArrival) {
        console.log("On time");

    } else if (examTime - arrivalTime <= 30 && examTime - arrivalTime > 0) {      // on time
        console.log("On time");

    } else if (examTime - arrivalTime > 30) {     // early
        console.log("Early");

    } else if (hourArrival > hourExam || minArrival > minExam) {     // late
        console.log("Late");

    }

    if (hourExam !== hourArrival || minExam !== minArrival) {

        if (examTime - arrivalTime < 60 && examTime - arrivalTime > 0) {     // if arriving less than an hour earlier
            console.log(`${(examTime - arrivalTime)} minutes before the start`);

        } else if (examTime - arrivalTime >= 60) {      // if arriving an hour or more earlier

            hh = Math.trunc((examTime - arrivalTime) / 60);     // hours earlier
            mm = (examTime - arrivalTime) % 60;         // minutes earlier

            if (mm < 10) mm = "0" + mm;

            console.log(`${hh}:${mm} hours before the start`);

        } else if (examTime - arrivalTime < 0 && Math.abs(examTime - arrivalTime) < 60) {       // if late less than an hour

            console.log(`${Math.abs(examTime - arrivalTime)} minutes after the start`)

        } else if (examTime - arrivalTime < 0 && Math.abs(examTime - arrivalTime) >= 60) {

            hh = Math.trunc(Math.abs((examTime - arrivalTime) / 60));

            mm = (Math.abs(examTime - arrivalTime)) % 60;
            if (mm < 10) mm = "0" + mm;

            console.log(`${hh}:${mm} hours after the start`);

        }
    }

}

onTimeForExam(["8", "00", "12", "00"]);