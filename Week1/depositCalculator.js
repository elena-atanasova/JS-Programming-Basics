function depositCalculator(input) {

    let sum = Number(input[0])
    let period = Number(input[1])
    let interest = Number(input[2])

    // сума = депозирана сума + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)
    let final = sum + period * ((sum * interest/100) / 12)

    console.log(final)
}

depositCalculator(["200", "3", "5.7"])