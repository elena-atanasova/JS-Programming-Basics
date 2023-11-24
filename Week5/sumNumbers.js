function sumNumbers(data) {

    let num = Number(data[0]);

    let n = Number(data[1]);
    let sum = n;

    let i = 2;
    while (sum < num) {

        n = Number(data[i]);
        sum += n;

        i++;
    }

    console.log(sum);

}

sumNumbers(["100", "10", "20", "30", "40"]);