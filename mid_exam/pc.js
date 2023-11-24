function pc(input) {

    let processorPrice = Number(input[0]) * 1.57;
    let videoCardPrice = Number(input[1]) * 1.57;
    let ramPrice = Number(input[2]) * 1.57;

    let ramNumber = Number(input[3]);
    let discount = Number(input[4]) * 100;

    let ram = ramPrice * ramNumber;
    let processorDiscounted = processorPrice - discount * processorPrice / 100;
    let vcDiscounted = videoCardPrice - discount * videoCardPrice / 100;

    let sum = (processorDiscounted + vcDiscounted + ram).toFixed(2);

    console.log(`Money needed - ${sum} leva.`);
}

pc(["500", "200", "80", "2", "0.05"]);