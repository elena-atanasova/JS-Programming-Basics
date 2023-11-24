function summerBooks(input) {

    let pagesNumber = Number(input[0])         // pages of the current book
    let pagesPerHour = Number(input[1])     // pages to be read per hour
    let days = Number(input[2])             // days to read the book

    // pagesNum / pagesPerHour = hours to read the whole book       212 / 20 = 10.6h
    let totalHours = pagesNumber / pagesPerHour
    
    // the book should be read for 2 days => 10.6 / 2
    let hoursPerDay = totalHours / days

    console.log(hoursPerDay)
}

summerBooks(['212', '20', '2'])