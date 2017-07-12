/**
 * @module Palindrome solvers
 * A palindrome is a string that reads the same forward and backward, for example,
 * - radar, toot, madam.
 */

/**
 * Returns true if the string is a palindrome
 */
function isPalindrome(str: string): boolean {
  const reversed = str.split('').reverse().join('');
  return reversed === str;
}

/** 
 * Returns true if ANY permutation of the string is a palindrome
 * civic true
 * vicic true
 * toot true
 * toto true
 * civil false
 */
function isAnyPermutationPalindrome(str: string): boolean {
  const unmatched = new Set<string>();
  str.split('').forEach(char => {
    if (unmatched.has(char)) unmatched.delete(char);
    else unmatched.add(char);
  });
  return unmatched.size <= 1;
}

// Output
console.log("isPalindrome: ", "")
console.log("civic: ", isPalindrome("civic"))
console.log("vicic: ", isPalindrome("vicic"))
console.log("toot: ", isPalindrome("toot"))
console.log("to: ", isPalindrome("to"))


console.log("isAnyPermutationPalindrome: ", "")
console.log("civic: ", isAnyPermutationPalindrome("civic"))
console.log("vicic: ", isAnyPermutationPalindrome("vicic"))
console.log("toot: ", isAnyPermutationPalindrome("toot"))
console.log("to: ", isAnyPermutationPalindrome("to"))








