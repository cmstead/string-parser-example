const { assert } = require('chai');

const { parseString } = require('../index');

describe('String parser', function () {

    describe('parseString', function () {
    
        it('returns an array of a pair containing the letter and count for a one-character string', function () {
            const stringToParse = 'a';

            const result = parseString(stringToParse);

            const expectedValue = [['a', 1]];

            assert.deepEqual(result, expectedValue);
        });

        it('returns an array of a pair containing the letter and count for a two-character, same character string', function () {
            const stringToParse = 'aa';

            const result = parseString(stringToParse);

            const expectedValue = [['a', 2]];

            assert.deepEqual(result, expectedValue);
        });

        it('returns an array of pairs for a string containing different characters', function () {
            const stringToParse = 'ab';

            const result = parseString(stringToParse);

            const expectedValue = [['a', 1], ['b', 1]];

            assert.deepEqual(result, expectedValue);
        });
    });

});