const removeFromArray = function(...myArray) {
    let newArray = myArray.filter((element) => !Array.isArray(element));
    let singleArray = myArray.shift();
    let finalArray = [];
    for (const element of singleArray) {
        if (!newArray.includes(element)) {
            finalArray.push(element)
        }
    }
    return finalArray
};


// Do not edit below this line
module.exports = removeFromArray;