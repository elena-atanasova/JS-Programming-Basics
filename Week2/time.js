function time(input) {

    let hour = Number(input[0]);
    let minutes = Number(input[1]);

    minutes += 15;

    if(minutes >= 60) {
        hour++;
        minutes -= 60;
    }

    if(hour >= 24) {
        hour -= 24;
    }

    if(minutes < 10) {
        minutes = "0" + minutes;
    }

    console.log(`${hour}:${minutes}`);

}

time((["23", "49"]));