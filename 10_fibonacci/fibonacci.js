const fibonacci = function(index) {
    let number = Number(index);
    if (number < 0) {
        return "OOPS"
    }
    let sequence = [1,1];
    for (let i = 0; i < number - 2; i++) {
        let nextNum = sequence[i] + sequence[i + 1];
        sequence[i + 2] = nextNum;
    }
    return sequence[sequence.length - 1]
};

// Do not edit below this line
module.exports = fibonacci;
