function sequence(data) {

    let n = Number(data[0]);
    let start = 1;

    while(start <= n) {

        console.log(start);
        start = 2 * start + 1;

    }
}

sequence(["17"]);