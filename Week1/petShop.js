function petShop(input) {
    let numberDogs = Number(input[0])
    let numberOtherAnimals = Number(input[1])
    let sum = numberDogs * 2.50 + numberOtherAnimals * 4

    console.log(`${sum} lv.`)
}

petShop(["13", "9"])