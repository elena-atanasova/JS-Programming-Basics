function examPreparation(input) {

    let poorMarksAllowed = Number(input[0]);

    let i = 1;
    let j = 2;
    let taskName = input[i];
    let taskMark = Number(input[j]);

    let average = 0;
    let countPoorMarks = 0;

    let numberOfProblems = 0;

    while (taskName !== "Enough") {

        if (taskMark <= 4) {
            countPoorMarks++;
        }

        if (countPoorMarks >= poorMarksAllowed) {
            console.log(`You need a break, ${countPoorMarks} poor grades.`);
            break;
        }

        average += taskMark;
        numberOfProblems++;
        i += 2;
        j += 2;
        taskName = input[i];
        taskMark = Number(input[j]);
    }


    if (taskName === "Enough") {

        console.log(`Average score: ${(average / numberOfProblems).toFixed(2)}`);
        console.log(`Number of problems: ${numberOfProblems}`);
        console.log(`Last problem: ${taskName = input[i - 2]}`);

    }

}

examPreparation(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);