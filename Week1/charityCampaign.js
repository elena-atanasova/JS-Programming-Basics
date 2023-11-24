function charityCampaign(input) {

    let days = Number(input[0]);
    let bakers = Number(input[1]);
    let cakesCount = Number(input[2]);
    let wafflesCount = Number(input[3]);
    let pancakesCount = Number(input[4]);

    // cake price = 45
    // waffle price = 5.80
    // pancake price = 3.20

    let sum = days * bakers * (cakesCount * 45 + wafflesCount * 5.80 + pancakesCount * 3.20);
    let finalSum = sum - sum/8;

    console.log(finalSum);
}

charityCampaign(['23', '8', '14', '30', '16']);