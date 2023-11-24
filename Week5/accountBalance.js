function accountBalance(data) {

    let balance = 0;
    let command = data[0];
   
    i = 1;
    while (command !== "NoMoreMoney") {

        let money = Number(command);

        if (money < 0) {

            console.log("Invalid operation!");
            break;
        }

        balance += money;
        console.log(`Increase: ${money.toFixed(2)}`);

        command = data[i];
        i++;

    }

    console.log(`Total: ${balance.toFixed(2)}`);

}

accountBalance(["120", "45.55", "-150"]);