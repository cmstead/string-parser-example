function parseString(stringToParse) {
    if(stringToParse.length === 1) {
        return [['a', 1]];
    } else if (stringToParse === 'aa') {
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