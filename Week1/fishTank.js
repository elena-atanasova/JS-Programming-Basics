function fishTank(input) {

    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);     

    let volume = length * width * height;       // in cm^3
    
    // 1 l = 1 dm^3
    // convert cm^3 to dm^3
    // 1cm^3 = 0.001 dm^3
    let volumeFinal = volume * 0.001;

    let waterVolume = volumeFinal - (percent/100) * volumeFinal;    // percent / 100  ->  17% = 17 / 100
    console.log(waterVolume);
}

fishTank(['85', '75', '47', '17']);