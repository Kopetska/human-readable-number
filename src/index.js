module.exports = function toReadable(number) {
    let result = 0;

    const numbersToTwenty = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    const numbersTens = [
        "",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    const numberArray = [];

    for (const value of String(number)) {
        numberArray.push(Number(value));
    }

    if (number < 20) {
        result = numbersToTwenty[number];
    } else if (number >= 20 && number < 100 && numberArray[1] === 0) {
        result = numbersTens[numberArray[0]];
    } else if (number >= 20 && number < 100) {
        const fitstWord = numbersTens[numberArray[0]];
        const secondWord = numbersToTwenty[numberArray[1]];
        result = `${fitstWord} ${secondWord}`;
    } else if (number >= 100 && numberArray[1] === 1) {
        const firstWord = numbersToTwenty[numberArray[0]];
        const secondWord =
            numbersToTwenty[
                Number([numberArray[1], numberArray[2]].join("").split(" "))
            ];
        result = `${firstWord} hundred ${secondWord}`;
    } else if (number >= 100 && numberArray[1] === 0 && numberArray[2] === 0) {
        const firstWord = numbersToTwenty[numberArray[0]];
        result = `${firstWord} hundred`;
    } else if (number >= 100 && numberArray[1] === 0) {
        const firstWord = numbersToTwenty[numberArray[0]];
        const secondWord = numbersToTwenty[numberArray[2]];
        result = `${firstWord} hundred ${secondWord}`;
    } else if (number >= 100 && numberArray[2] === 0) {
        const firstWord = numbersToTwenty[numberArray[0]];
        const secondWord = numbersTens[numberArray[1]];
        result = `${firstWord} hundred ${secondWord}`;
    } else if (number >= 100) {
        const firstWord = numbersToTwenty[numberArray[0]];
        const secondWord = numbersTens[numberArray[1]];
        const thirdWord = numbersToTwenty[numberArray[2]];
        result = `${firstWord} hundred ${secondWord} ${thirdWord}`;
    }

    return result;
};
