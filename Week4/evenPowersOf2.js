function evenPowersOf2(input) {

    let n = Number(input[0]);

    // 0 is also even

    for (let i = 0; i <= n; i += 2) {

        console.log(Math.pow(2, i));

    }

}

evenPowersOf2(["7"]);