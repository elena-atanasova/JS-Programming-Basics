function workingHours(data) {

    let hour = Number(data[0]);
    let day = data[1];

    // check if the office is working : 10 - 18h | Monday to Saturday

    if (hour >= 10 && hour <= 18) {
        switch (day) {
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday":
            case "Saturday":
                console.log("open"); break;
            default:
                console.log("closed");
                break;
        }

    } else {
        console.log("closed");
        
    }
}

workingHours(["11", "Sunday"]);