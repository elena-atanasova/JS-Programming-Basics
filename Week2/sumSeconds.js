function sumSeconds(input) {
    let firstAthlete = Number(input[0]);
    let secondAthlete = Number(input[1]);
    let thirdAthlete = Number(input[2]);

    let seconds = firstAthlete + secondAthlete + thirdAthlete;
    let minutes = 0;

    // 1 min = 60s
    for (let i = 0; i < input.length; i++) {
        if (seconds >= 60) {
            minutes = minutes + 1;
            seconds = seconds - 60;
        }
    }

    if(seconds < 10) {
        seconds = "0" + seconds;
    }
    
    console.log(`${minutes}:${seconds}`);


    /*
    let totalTime = timeFirst + timeSecond + timeThird;

    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    if(seconds < 10) {
        console.log(`${minutes}:0${seconds}`);

    } else {
        console.log(`${minutes}:${seconds}`);

    } */
}

sumSeconds(["14", "12", "10"]);