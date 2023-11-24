function sumAndProduct(input) {

    let n = Number(input[0]);
    let isFound = false;

    for (let a = 1; a <= 9; a++) {

        for (let b = 9; b >= a; b--) {

            for (let c = 0; c <= 9; c++) {

                for (let d = 9; d >= c; d--) {

                    if ( (((a * b * c * d) / (a + b + c + d)).toFixed(0) == 3) && n % 3 === 0) {
                        console.log((d+2) * 1000 + c * 100 + b * 10 + a);
                        isFound = true;
                        break;

                    } else if ((a+b+c+d) === (a*b*c*d) && n % 10 === 5) {
                        console.log(`${a}${b}${c}${d+2}`);
                        isFound = true;
                        break;
                    } else {
                        console.log("Nothing found!");
                        isFound = true;
                        break;
                    }
                }

                if(isFound === true){
                    break;
                }
                
            }
        }
    }
 
}

sumAndProduct(["123"]);