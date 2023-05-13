const repeatString = function(myString, num) {
    let newString = '';
    if (num  < 0 ) {
        return "ERROR";
    }
    for (let i = 0; i < num; i++) {
        newString += myString;   
    }
    return newString
};

// Do not edit below this line
module.exports = repeatString;
