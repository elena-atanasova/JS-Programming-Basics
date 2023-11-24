function salary(input) {

    let tabNum = Number(input[0]);
    let salary = Number(input[1]);

    for (let i = 2; i <= input.length; i++) {

        let website = input[i];

        switch (website) {
            case "Facebook": salary -= 150; break;
            case "Instagram": salary -= 100; break;
            case "Reddit": salary -= 50; break;
            default: salary -= 0; break;
        }

        if (salary <= 0) {

            console.log("You have lost your salary.");
            break;

        }

    }

    if (salary > 0) {

        console.log(`${Math.trunc(salary)}`);

    }
}

salary(["3", "500", "Github.com", "Stackoverflow.com", "softuni.com"]);