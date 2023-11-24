function multiplicationTable() {

    for(f = 1; f <= 10; f++) {

        for (s = 1; s <= 10; s++) {

            let result = f * s;
            console.log(`${f} * ${s} = ${result}`);

        }
    }
}

multiplicationTable();