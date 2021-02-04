function parseString(stringToParse) {

    let characterArray = [];
    // let currentCharacterTuple = null;
    let lastCharacter = null;

    stringToParse.split('').forEach(function (character) {
        const lastCharacterTuple = characterArray[characterArray.length - 1];

        if (lastCharacter !== character) {
            characterArray.push([character, 1]);
        } else {
            lastCharacterTuple[1]++;
        }

        lastCharacter = character;
    });

    return characterArray;
}

module.exports = {
    parseString
};