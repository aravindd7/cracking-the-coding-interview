
const Unit1 = {

  // 1.1 - Is Unique
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

  // 1.2 - Check Permutation
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
  
  // 1.3 urlify
  // Write a method to replace all spaces in a string with '%20'.
  // I: String with spaces
  // O: string with '%20' instead of spaces
  // C: No time/space complexities
  // E: Emptry string, non-string
  urlify: (str) => {
    if (!str || !str.length || typeof str !== 'string') return undefined;
    return str.split(' ').join('%20');
  }, 

  // 1.4 Palindrome Permutation
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

  // 1.5 One Away
  // Given 2 strings, write a method to check if they are one (or 0) edits away from
  // mathing
  // I: 2 strings
  // O: Boolean
  // C: No time/space complexities
  // E: Emptry string, non-string, 1 string

  oneAway: (str1, str2) => {
    if (   !str1 
      || !str2
      || typeof str1 !== 'string'
      || typeof str2 !== 'string'
      ) {
        return false;
      }
      
    let freqCounter = {};
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    
    str1.split('').forEach(letter => {
      if (freqCounter[letter]) {
        delete freqCounter[letter];
      } else {
        freqCounter[letter] = 1;
      }
    });

    str2.split('').forEach(letter => {
      if (freqCounter[letter]) {
        delete freqCounter[letter];
      } else {
        freqCounter[letter] = 1;
      }
    });

    let spareChar = Object.values(freqCounter).reduce((acc, val) => acc += val, 0);
    return spareChar < 2 ? true : false;
  },
  
  // 1.6 - String Compression
  // Given a string, write a method that implements basic string compression using
  // the counts of repeated characters
  // I: String (i.e. 'aabbbcddddd')
  // O: Compressed string, or string if shorter (i.e. 'a2b3c1d5')
  // C: None
  // E: Empty string, non-string input, no input

  stringCompression: (str) => {
    if (!str || !str.length || typeof str !== 'string') return undefined;
    let counter = 0;
    let compressed = ''
  
    for (let i = 0; i < str.length; i++) {
      counter++;
      if (str[i] !== str[i + 1]) {
        compressed += str[i] + counter;
        counter = 0;
      }
    };
    return compressed.length < str.length ? compressed : str;
  },


  // 1.7 - Rotate Matrix
  // Given an 2D Matrix, write a method to rotate it 90°
  // I: NxN matrix
  // O: NxN matrix rotated 90°
  // C: O(1) space
  // E: 1x1 matrix, empty matrix, non-matrix input

  rotateMatrix: (m) => {
    const n = m.length;
    for (let i = 0; i < Math.floor(n / 2); i++) {
      for (let j = 0; j < n - (2 * i) - 1; j++) {
        
        let temp = m[i + j][n - 1 - i];
        m[i + j][n - 1 - i] = m[i][i + j];
        m[i][i + j] = temp;

        temp = m[n - 1 - i][n - 1 - i - j];
        m[n - 1 - i][n - 1 - i - j] = m[i][i + j];
        m[i][i + j] = temp;

        temp = m[n - 1 - i - j][i];
        m[n - 1 - i - j][i] = m[i][i + j];
        m[i][i + j] = temp;
      }
    };

    return m;
  },

  // 1.8 - Zero Matrix
  // Given an NxM Matrix, write a method where if a zero is found, that row & col
  // will be turned into all zeros.
  // I: NxM matrix
  // O: NxM matrix 
  // C: n/a
  // E: 1x1 matrix, empty matrix, non-matrix input
  zeroMatrix: (m) => {
    if (!Array.isArray(m) || !m) return undefined;
    const rowWithZeroes = [];
    const colWithZeroes = [];

    const zeroTheRow = (r, m) => {
      for (let c = 0; c < m[r].length; c++) {
        m[r][c] = 0;
      };
    };

    const zeroTheCol = (c, m) => {
      for (let r = 0; r < m.length; r++) {
        m[r][c] = 0;
      };
    };

    for (let r = 0; r < m.length; r++) {
      for (let c = 0; c < m[r].length; c++) {
        if (m[r][c] === 0) {
          if (!rowWithZeroes.includes(r)) {
            rowWithZeroes.push(r);
          }
          if (!colWithZeroes.includes(c)) {
            colWithZeroes.push(c);
          }
        } 
      }
    }

    rowWithZeroes.forEach(row => zeroTheRow(row, m));
    colWithZeroes.forEach(col => zeroTheCol(col, m));

    return m;
  },

  // 1.9 - String Rotation
  // Assume you have a method, isSubstring, which can check if one work is a substring
  // of another. Given 2 strings, write a method to check if s2 is a rotation of s1 using
  // only one call to isSubstring
  // I: String (i.e. 'waterbottle', 'erbottlewat')
  // O: Boolean
  // C: Only call to helper function 1x
  // E: Empty strings, 1 string, non-string inputs 
  
  stringRotation: (s1, s2) => {
    let s1copy = s1;
    let s2copy = s2;
    let part1 = [];
    let part2;
    let idx = s2copy.length - 1;

    while (idx > -1) {
      if (s1copy === s2copy) {
        part2 = s2copy;
        break;
      } else {
        let letterToRemove = s2copy[idx];
        part1.unshift(letterToRemove);
        s1copy = s1copy.replace(letterToRemove, '');
        s2copy = s2copy.slice(0, idx);
        idx--;
      }
    }

    part1 = part1.join('');
    let s1Vaidate = s1 === `${part1}${part2}`;
    let s2Vaidate = s2 === `${part2}${part1}`;
    
    return s1Vaidate && s2Vaidate ? true : false;
  },
}

module.exports = Unit1;