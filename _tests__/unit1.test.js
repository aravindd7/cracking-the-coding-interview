const unit1 = require('../Unit-1');

describe('Toy Problem Tests', () => {
  describe('Unit 1 Tests', () => {
    describe('1.1 - isUnique', () => {

      test('Should return true if the string has all unique characters', () => {
        const str = 'jamest';
        expect(unit1.isUnique(str)).toEqual(true);
      });

      test('Should return false if the string does not have all unique characters', () => {
        const str = 'happy';
        expect(unit1.isUnique(str)).toEqual(true);
      });

      test('Should return false if the input is not a string (Array)', () => {
        const str = ['happy'];
        expect(unit1.isUnique(str)).toEqual(false);
      });

      test('Should return false if the input is not a string (Number)', () => {
        const str = 37;
        expect(unit1.isUnique(str)).toEqual(false);
      });

      test('Should return false if the input is not a string (Object)', () => {
        const str = {string: 'happy'};
        expect(unit1.isUnique(str)).toEqual(false);
      });

      test('Should return false if the input is an empty string', () => {
        const str = '';
        expect(unit1.isUnique(str)).toEqual(false);
      });

    });

    describe('1.2 - checkPermutation', () => {
      test('Should return true if the strings are permutations', () => {
        const str = 'jamest';
        const str2 = 'ajesmt';
        expect(unit1.checkPermutation(str, str2)).toEqual(true);
      });

      test('Should return false if the strings are permutations', () => {
        const str = 'james';
        const str2 = 'tsukamoto';
        expect(unit1.checkPermutation(str, str2)).toEqual(false);
      });

      test('Should return false if there is only 1 input', () => {
        const str = 'jamest';
        expect(unit1.checkPermutation(str)).toEqual(false);
      });

      test('Should return false if there is a non-string input', () => {
        const str = 'jamest';
        const str2 = ['ajesmt'];
        expect(unit1.checkPermutation(str, str2)).toEqual(false);
      });
    });

    describe('1.3 - urlify', () => {
      test('Should insert "%20" in the spaces', () => {
        const str = 'Mr John Smith';
        expect(unit1.urlify(str)).toEqual('Mr%20John%20Smith');
      });

      test('Should insert nothing is there are no spaces', () => {
        const str = 'MrJohnSmith';
        expect(unit1.urlify(str)).toEqual('MrJohnSmith');
      });

      test('Should return undefined if no string is passed in', () => {
        expect(unit1.urlify()).toEqual(undefined);
      });

      test('Should return undefined if an empty string is passed in', () => {
        const str = '';
        expect(unit1.urlify(str)).toEqual(undefined);
      });

      test('Should return undefined if a non-string is passed in', () => {
        const str = ['Mr John Smith'];
        expect(unit1.urlify(str)).toEqual(undefined);
      });

    });

    describe('1.4 - Palindrome Permutation', () => {
      test('Should return true if input is a permutation of palindrome', () => {
        const str = 'Tact Coa';
        expect(unit1.palindromePermutation(str)).toEqual(true);
      });

      test('Should return false if input isn\'t permutation of palindrome', () => {
        const str = 'Tact Cot';
        expect(unit1.palindromePermutation(str)).toEqual(false);
      });

      test('Should return false if input isn\'t a string (Array)', () => {
        const str = ['racecar'];
        expect(unit1.palindromePermutation(str)).toEqual(false);
      });

      test('Should return false if input isn\'t a string (Object)', () => {
        const str = {palindrome: 'racecar'};
        expect(unit1.palindromePermutation(str)).toEqual(false);
      });

      test('Should return false if input isn\'t a string (Number)', () => {
        const str = 737;
        expect(unit1.palindromePermutation(str)).toEqual(false);
      });

      test('Should return false if input is empty', () => {
        const str = '';
        expect(unit1.palindromePermutation(str)).toEqual(false);
      });
    });

    describe('1.5 - One Away', () => {
      test('1. Should return true if the strings are 1 edit away', () => {
        const str1 = 'test';
        const str2 = 'tests';
        expect(unit1.oneAway(str1, str2)).toEqual(true)
      });

      test('2. Should return true if the strings are 1 edit away', () => {
        const str1 = 'tests';
        const str2 = 'test';
        expect(unit1.oneAway(str1, str2)).toEqual(true)
      });

      test('3. Should return true if the strings are 1 edit away', () => {
        const str1 = 'james';
        const str2 = 'jmes';
        expect(unit1.oneAway(str1, str2)).toEqual(true)
      });

      test('4. Should return true if the strings are 1 edit away', () => {
        const str1 = 'James';
        const str2 = 'jmes';
        expect(unit1.oneAway(str1, str2)).toEqual(true)
      });

      test('Should return false if the strings are not 1 edit away', () => {
        const str1 = 'james';
        const str2 = 'jmest';
        expect(unit1.oneAway(str1, str2)).toEqual(false)
      });

      test('Should return false if the strings are not 1 edit away', () => {
        const str1 = 'piggy';
        const str2 = 'bacon';
        expect(unit1.oneAway(str1, str2)).toEqual(false)
      });

      test('Should return false if the input(s) are not strings (Object)', () => {
        const str1 = 'piggy';
        const str2 = {word: 'piggy'};
        expect(unit1.oneAway(str1, str2)).toEqual(false)
      });

      test('Should return false if the input(s) are not strings (Array)', () => {
        const str1 = 'piggy';
        const str2 = ['piggy'];
        expect(unit1.oneAway(str1, str2)).toEqual(false)
      });
    });

  });
});