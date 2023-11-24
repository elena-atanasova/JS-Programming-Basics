function readText(input) {

    let i = 0;

    while (true) {

        let text = input[i];
        i++;

        if (text === "Stop") { break;}

        console.log(text);

    }
}

readText(["Nakov", "SoftUni", "Sofia", "Bulgaria", "SomeText", "Stop", "AfterStop", "Europe", "HelloWorld"]);