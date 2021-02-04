function parseString(stringToParse) {

    let characterArray = [];

    stringToParse.split('').forEach(function (character) {
        const lastCharacterTuple = characterArray[characterArray.length - 1];
        const lastCharacter = characterArray.length > 0
            ? lastCharacterTuple[0]
            : null;

        if (lastCharacter !== character) {
            characterArray.push([character, 1]);
        } else {
            lastCharacterTuple[1]++;
        }
    });

    return characterArray;
}

module.exports = {
    parseString
};