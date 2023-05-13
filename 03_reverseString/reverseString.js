const reverseString = function(myString) {
    let reverseString = '';
    for (let i = 0; i < myString.length; i++) {
        let currentLetter = myString.slice(i, i + 1);
        reverseString = currentLetter + reverseString;
    }

    return reverseString
};

// Do not edit below this line
module.exports = reverseString;
