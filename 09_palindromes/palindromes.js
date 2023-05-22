const palindromes = function (palindrome) {
    const palindromeArray = palindrome.split('');
    const noSpaces = palindromeArray.filter(letter => ((letter !== ' ') && (letter.toUpperCase() !== letter.toLowerCase())))
    const upperCase = noSpaces.map((letter) => letter.toUpperCase())
    for (let i = 0; i < upperCase.length - 1; i++) {
        if (upperCase[i] !== upperCase[upperCase.length-i - 1]) {
            console.log(upperCase[i], upperCase[upperCase.length - i - 1])
            return false
        }
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
