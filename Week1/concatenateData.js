function concatenateData(input) {
    let fName = input[0]
    let lName = input[1]
    let age = Number(input[2])
    let town = input[3]

    console.log(`You are ${fName} ${lName}, a ${age}-years old person from ${town}.`)
}

concatenateData(["Elena", "Atanasova", 20, "Plovdiv"])