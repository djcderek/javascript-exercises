const sumAll = function(a, b) {
    let sum = 0;
    let startNum = a;
    let endNum = b;

    if (a < 0 || b < 0) {
        return "ERROR"
    }

    if (typeof a != "number" || typeof b != "number") {
        return "ERROR"
    }

    if (startNum > endNum) {
        let temp = startNum;
        startNum = endNum;
        endNum = temp;
    }

    for (i = startNum; i <= endNum; i++) {
        sum += i;
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
