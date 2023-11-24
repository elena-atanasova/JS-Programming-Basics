function movingIn(input) {

    let width = Number(input[0]);
    let length = Number(input[1]);
    let hight = Number(input[2]);

    let freeSpace = width * length * hight;
    let boxesAll = 0;

    let command = input[3];

    let i = 4;
    while (command !== "Done") {

        let boxes = Number(command);

        if (boxesAll < freeSpace) {

            boxesAll += boxes;
            command = input[i];
            i++;

        } else {

            console.log(`No more free space! You need ${Math.abs(boxesAll - freeSpace)} Cubic meters more.`);
            break;

        }

    }

    if (command === "Done") {

        console.log(`${Math.abs(freeSpace - boxesAll)} Cubic meters left.`);

    }
}

movingIn(["10", "10", "2", "20", "20", "20", "20", "122"]);