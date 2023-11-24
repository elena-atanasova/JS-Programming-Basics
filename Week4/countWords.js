function countWords(input) {

    /*
    let text = input[0];
    let splittedStr = text.split(' ');
    let wordsCount = splittedStr.length;
    */

    let text = input[0];
    let countSpaces = 0;

    for (let i = 0; i < text.length; i++) {

        if(text[i] === " ") {
            countSpaces++;
        }

    }

    let countWords = countSpaces + 1;     // after the last word there is no space

    if (countWords <= 10) {
        console.log("The message was sent successfully!");

    } else {
        console.log(`The message is too long to be send! Has ${countWords} words.`);

    }

}

countWords(["This message has exactly eleven words. One more as it's allowed!"]);