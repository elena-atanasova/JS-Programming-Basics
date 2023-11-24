function combinations(input) {

    // x1 + x2 + x3 = n

    let n = Number(input[0]);
    let count = 0;  // counter for the number of combinations

    for(x = 0; x <= 25; x++) {

        for(y = 0; y <= 25; y++) {

            for(z = 0; z <= 25; z++){

                let result = x + y + z;

                if(result === n) {
                    count++;
                }
            }
        }
    }

    console.log(count);

}

combinations(["5"]);