function graduation(input) {

    let name = input[0];
    let mark = Number(input[1]);

    let grade = 0;
    let fail = 0;
    let sum = 0;

    let i = 2;
    while (grade <= 12) {

        if (mark >= 4) {
            grade++;
            sum += mark;
            mark = Number(input[i]);
            i++;

            if (grade === 12) {
                console.log(`${name} graduated. Average grade: ${(sum / 12).toFixed(2)}`);
                break;
            }

            continue;
        }

        fail++;

        if (fail === 2) {
            console.log(`${name} has been excluded at ${grade + 1} grade`);
            break;
        }

        mark = Number(input[i]);
        i++;

    }
}

graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);