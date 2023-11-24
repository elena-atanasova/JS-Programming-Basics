function building(input) {

    let floors = Number(input[0]);
    let roomsPerFloor = Number(input[1]);

    for (let i = floors; i > 0; i--) {

        let buffer = "";
        for (let r = 0; r < roomsPerFloor; r++) {
            if (i === floors) {

                buffer += "L" + i + r + " ";

            } else if (i % 2 === 0) {

                buffer += "O" + i + r + " ";

            } else if (i % 2 === 1) {

                buffer += "A" + i + r + " ";

            }
        }

        console.log(buffer);

    }

}

building(["6", "4"]);