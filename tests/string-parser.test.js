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

    });

});