
const Unit1 = {

  // Implement an algorithm to determine if a string has all unique characters.
  // I: string 
  // O: boolean
  // C: O(1) space
  // E: empty string, non-string
  isUnique: (string) => {
    if (typeof string !== 'string' || !string.length) return false;
    string.split('').forEach(letter => {
      if (string.indexOf(letter) !== string.lastIndexOf(letter)) {
        return false;
      }
    });
    return true;
  }, 

  // Given two strings, write a method to decide if one is a permutation of the other
  // I: 2 strings 
  // O: boolean
  // C: Ideally O(n log n)
  // E: 1 string, non-string input
  checkPermutation: (str1, str2) => {
    if (   !str1 
        || !str2
        || typeof str1 !== 'string'
        || typeof str2 !== 'string'
        ) {
          return false;
    }
    let sorted1 = str1.split('').sort().join();
    let sorted2 = str2.split('').sort().join();
    
    return sorted1 === sorted2 ? true : false;
  }, 

  // Write a method to replace all spaces in a string with '%20'.
  // I: String with spaces
  // O: string with '%20' instead of spaces
  // C: No time/space complexities
  // E: Emptry string, non-string
  urlify: (str) => {
    if (!str || !str.length || typeof str !== 'string') return undefined;
    return str.split(' ').join('%20');
  }, 

  // Given a string, write a method to check if it is a permutation of a palindrome.
  // I: String
  // O: Boolean
  // C: No time/space complexities
  // E: Emptry string, non-string

  palindromePermutation: (str) => {
    if (!str || !str.length || typeof str !== 'string') return false;
    str = str.toLowerCase().split(' ').join('');
    let freqCounter = {};

    for (let i = 0; i < str.length; i++) {
      if (freqCounter[str[i]]) {
        delete freqCounter[str[i]];
      } else {
        freqCounter[str[i]] = 1;
      }
    };

    if (Object.keys(freqCounter).length > 1) {
      return false;
    } else {
      return true;
    }
  }, 




}

module.exports = Unit1;