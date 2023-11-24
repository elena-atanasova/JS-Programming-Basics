function fruitMarket(input) {

    let strawberryPrice = Number(input[0]);     // price per kilo
    let bananaNum = Number(input[1]);
    let orangeNum = Number(input[2]);
    let raspberryNum = Number(input[3]);
    let strawberryNum = Number(input[4]);

    let raspberryPrice = strawberryPrice / 2;
    let orangePrice = raspberryPrice - (0.4 * raspberryPrice);
    let bananaPrice = raspberryPrice - (0.8 * raspberryPrice);

    let sum = bananaNum * bananaPrice + orangeNum * orangePrice + raspberryNum * raspberryPrice + strawberryNum * strawberryPrice;

    console.log(sum);

}

fruitMarket(['48', '10', '3.3', '6.5', '1.7']);