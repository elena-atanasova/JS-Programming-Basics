function divideWithoutRemainder(input) {

    let numCount = Number(input[0]);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;

    for (let i = 1; i <= 1000; i++) {

        let currNum = Number(input[i]);

        if (currNum % 2 === 0) {
            p1++;
        } 
        
        if (currNum % 3 === 0) {
            p2++;
        }

        if (currNum % 4 === 0) {
            p3++;
        }
    }

    console.log(`${(p1 / numCount * 100).toFixed(2)}%`);
    console.log(`${(p2 / numCount * 100).toFixed(2)}%`);
    console.log(`${(p3 / numCount * 100).toFixed(2)}%`);

}

divideWithoutRemainder(["3", "3", "6", "9"]);