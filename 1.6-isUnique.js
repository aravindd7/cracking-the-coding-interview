// Implement an algorithm to determine if a string has all unique characters.
// I: string 
// O: boolean
// C: O(1) space
// E: empty string, non-string

isUnique = (string) => {
  if (typeof string !== 'string' || !string.length) return null;
  string.forEach(letter => {
    if (string.indexOf(letter) !== string.lastIndexOf(letter)) {
      return false;
    }
  });
  return true;
};