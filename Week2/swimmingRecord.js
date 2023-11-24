function swimmingRecord(input) {

    let recordInSeconds = Number(input[0]);
    let distanceInMeters = Number(input[1]);          
    let secondsForMeter = Number(input[2]);         

    // съпротивлението на водата го забавя на всеки 15 м. с 12.5 секунди

    let timeSwim = secondsForMeter * distanceInMeters;       // sec for the whole swim

    // how many 15 meters
    let count = Math.floor(distanceInMeters / 15);

    timeSwim += count * 12.5;

    if(timeSwim < recordInSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${timeSwim.toFixed(2)} seconds.`);

    } else {
        let neededTime = timeSwim - recordInSeconds;
        console.log(`No, he failed! He was ${neededTime.toFixed(2)} seconds slower.`);
    }
    
}

swimmingRecord(["10464", "1500", "20"]);