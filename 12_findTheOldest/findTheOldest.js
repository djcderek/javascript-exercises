const findTheOldest = function(people) {
    const sortedPeople =  people.sort((a,b) => {
        if (a.yearOfDeath === undefined) a.yearOfDeath = 2023
        if (b.yearOfDeath === undefined) b.yearOfDeath = 2023
        if ((a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth)) {
            return -1
        } else {
            return 1
        }
    })

    return sortedPeople[0]
};

// Do not edit below this line
module.exports = findTheOldest;
