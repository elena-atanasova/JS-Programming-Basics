function cinemaTickets(input) {

    let index = 0;
    let name = input[index];
    index++;

    let countStudentTicket = 0;
    let countStandardTicket = 0;
    let countKidTicket = 0;

    while (name !== "Finish") {

        let freeSpace = Number(input[index]);
        index++;

        let counterTicket = 0;
        

        let command = input[index];
        index++;

        while (command !== "End") {

            let type = command;

            if (type === "student") {
                countStudentTicket++;
            } else if (type === "standard") {
                countStandardTicket++;
            } else {
                countKidTicket++;
            }
            
            counterTicket++;

            if (freeSpace === counterTicket) {
                break;
            }

            command = input[index];
            index++;

        }

        let percentage = counterTicket / freeSpace * 100;
        console.log(`${name} - ${percentage.toFixed(2)}% full.`);

        name = input[index];
        index++;

    }

        let totalTickets = countStandardTicket + countStudentTicket + countKidTicket;
        console.log(`Total tickets: ${totalTickets}`);
        
        let standardTicketPercentage = countStandardTicket / totalTickets * 100;
        let studentTicketPercentage = countStudentTicket / totalTickets * 100;
        let kidTicketPercentage = countKidTicket / totalTickets * 100;
        
        console.log(`${studentTicketPercentage.toFixed(2)}% student tickets.`);
        console.log(`${standardTicketPercentage.toFixed(2)}% standard tickets.`);
        console.log(`${kidTicketPercentage.toFixed(2)}% kids tickets.`);
    }



cinemaTickets(["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie",
    "6", "student", "student", "student", "student", "student", "student", "kids", "Finish"]);
