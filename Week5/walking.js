function walking(input) {

    // goal - 10 000 steps per day

    let command = input[0];
    let stepsAll = 0;

    let i = 1;
    while (command !== "Going home") {

        let steps = Number(command);
        stepsAll += steps;

        if (stepsAll >= 10000) {
            console.log(`Goal reached! Good job!`);
            console.log(`${stepsAll - 10000} steps over the goal!`);
            break;
        }

        command = input[i];
        i++;

    }

    if (command === "Going home") {

        let homeSteps = Number(input[i]);

        stepsAll += homeSteps;

        if (stepsAll < 10000) {
            console.log(`${10000 - stepsAll} more steps to reach goal.`);

        } else {
            console.log(`Goal reached! Good job!`);
            console.log(`${stepsAll - 10000} steps over the goal!`);
        }
    }


}

walking(["1500", "300", "2500", "3000", "Going home", "200"]);