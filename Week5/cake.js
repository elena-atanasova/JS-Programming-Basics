function cake(input) {

    let length = Number(input[0]);
    let height = Number(input[1]);

    let cakeSize = length * height;
    let piecesCount = 0;

    let command = input[2];

    let i = 3;
    while (command !== "STOP") {

        let n = Number(command);

        if (piecesCount < cakeSize) {
            piecesCount += n;

        } else {
            console.log(`No more cake left! You need ${piecesCount - cakeSize} pieces more.`);
            break;
        }

        command = input[i];
        i++;

    }

    if (command === "STOP" && piecesCount < cakeSize) {
        console.log(`${cakeSize - piecesCount} pieces are left.`);

    } else if (command === "STOP" && piecesCount >= cakeSize) {
        console.log(`No more cake left! You need ${piecesCount - cakeSize} pieces more.`);
    }

}

cake(["10", "10", "20", "20", "20", "20", "21"]);