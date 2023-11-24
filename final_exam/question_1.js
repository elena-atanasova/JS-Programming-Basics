function witches(input) {

    let i = 0
    let skill = input[i]
    i++

    let command = input[i]

    while(command !== "For Azeroth") {

        command = input[i]

        let newCommand = command.split(" ")
        let index = newCommand[1]
        let letter = newCommand[2]
        let firstStr = newCommand[2]
        let secondStr = newCommand[3]
        let substring = newCommand[2]
        
        if (command === "GladiatorStance") {

            let result = skill.toUpperCase()
            console.log(result);

        } else if (command === "DefensiveStance"){

            let result = skill.toLowerCase()
            console.log(result);

        } else if (command === `Dispel ${index} ${letter}`) {

            if (command[Number(index)] !== undefined) {

                command[Number(index)] == secondStr
                console.log("Success!");

            } else {
                console.log("Dispel too weak");
            }

       } else if (command === `Target Change ${firstStr} ${secondStr}`) {

            

        } else if (command === `Target Remove ${substring}`) {

        } else if (command !== "For Azeroth") {
            console.log("Command doesn't exist!");
        }

        i++

    } 

    if (command !== "For Azeroth") {
        console.log(command);
    }

}

witches(["fr1c710n", "GladiatorStance", "Dispel 2 I", "Dispel 4 T", "Target Change RICTION riction", "For Azeroth"])
