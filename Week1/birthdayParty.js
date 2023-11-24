function birthdayParty(input) {

    let rent = Number(input[0]);
    let cake = (20/100) * rent;
    let drinks = cake - (0.45 * cake);
    let animator = rent / 3;

    let budget = rent + cake + drinks + animator;

    console.log(budget);
}

birthdayParty(["3720"]);