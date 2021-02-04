function parseString(stringToParse) {

    let characterArray = [];
    let currentCharacterTuple = null;
    let lastCharacter = null;

    stringToParse.split('').forEach(function (character) {
        if (lastCharacter !== character) {
            currentCharacterTuple = [character, 1];
            characterArray.push(currentCharacterTuple);
        } else {
            currentCharacterTuple[1]++;
        }

        lastCharacter = character;
    });

    return characterArray;
}

module.exports = {
    parseString
};