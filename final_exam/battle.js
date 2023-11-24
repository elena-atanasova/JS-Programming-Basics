function battle(input) {

    let i = 0
    let command = input[i]

    while(command !== "Results") {

        let arr = command.split(":")

        let instruction = arr[0]

        if(instruction === "Add") {

            let name = arr[1]
            let health = Number(arr[2])
            let energy = Number(arr[3])

        } else if (instruction === "Attack") {

        } else if (instruction === "Delete")

    }

}

battle(["Add:Mark:1000:5",
"Add:Clark:1000:2",
"Attack:Clark:Mark:500",
"Attack:Clark:Mark:800",
"Add:Charlie:4000:10",
"Results"])
