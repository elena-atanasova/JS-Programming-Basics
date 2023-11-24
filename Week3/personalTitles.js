function personalTitles(data) {

    let age = Number(data[0]);
    let gender = data[1];

    if(gender === "m" && age >= 16) {
        console.log("Mr.");
    
    } else if (gender === "m" && age < 16) {
        console.log("Master");
    
    } else if (gender === "f" && age >= 16) {
        console.log("Ms.");
    
    } else if (gender === "f" && age < 16) {
        console.log("Miss");
    }
}

personalTitles(["13.5", "m"]);
