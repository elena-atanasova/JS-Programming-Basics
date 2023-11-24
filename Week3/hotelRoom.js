function hotelRoom(input) {

    let month = input[0];
    let nights = Number(input[1]);

    let studioPrice = 0;
    let apartmentPrice = 0;

    if (month === "May" || month === "October") {

        studioPrice = nights * 50;
        apartmentPrice = nights * 65;

        if (nights > 7 && nights <= 14) {

            studioPrice = 0.95 * studioPrice;
            
        } else if (nights > 14) {

            studioPrice = 0.70 * studioPrice;
            apartmentPrice = 0.90 * apartmentPrice;
           
        }


    } else if (month === "June" || month === "September") {

        studioPrice = nights * 75.20;
        apartmentPrice = nights * 68.70;

        if (nights > 14) {
            
            studioPrice = 0.80 * studioPrice;
            apartmentPrice = 0.90 * apartmentPrice;

        }

    } else if (month === "July" || month === "August") {

        studioPrice = nights * 76;
        apartmentPrice = nights * 77;

        if (nights > 14) {

            apartmentPrice = 0.90 * apartmentPrice;

        }

    }

    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);

}

hotelRoom(["August", "20"]);