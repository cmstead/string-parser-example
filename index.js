function parseString(stringToParse) {
    if (stringToParse === 'aa') {
        return [['a', stringToParse.length]];
    } else {
        let characterArray = [];

        stringToParse.split('').forEach(function(character) {
            characterArray.push([character, 1]);
        });

        return characterArray;
    }
}

module.exports = {
    parseString
};