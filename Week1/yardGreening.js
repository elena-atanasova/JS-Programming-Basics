function yardGreening(input) {
    let m = Number(input[0])
    let sum = m * 7.61
    let discount = 18/100 * sum     // 0.18 * sum
    let final = sum - discount

    console.log(`The final price is: ${final} lv.`)
    console.log(`The discount is: ${discount} lv.`)
}

yardGreening(["150"])