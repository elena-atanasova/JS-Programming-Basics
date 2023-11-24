function oldBooks(input) {

    let favouriteBook = input[0];

    let command = input[1];
    let count = 0;

    let i = 2;
    while (command !== "No More Books") {

        if (command === favouriteBook) {

            console.log(`You checked ${count} books and found it.`);
            break;

        }

        count++;
        command = input[i];
        i++;

    }

    if (command === "No More Books") {

        console.log(`The book you search is not here!`);
        console.log(`You checked ${count} books.`);

    }
}

oldBooks(["Bourne", "True Story", "Forever", "More Space", "The Girl", "Spaceship", "Strongest", "Profit", "Tripple", "Stella", "The Matrix", "Bourne"]);