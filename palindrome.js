/**
 * Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palin- drome. 
 * A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a 
 * rearrangement of letters. The palindrome does not need to be limited to just dictionary words. 
 * EXAMPLE
 *
Input : Tact Coa
Output: True (permutations: "taco cat", "atco eta", etc.)
 */

function isPalindrome(input) {
  if (!input) return false;
  const len = input.length;

  for (let i = 0; i < len / 2; i++) {
    if (input[i].toLowerCase() != input[len - 1 - i].toLowerCase()) {
      return false;
    }
  }
  return true;
}

function isPalindromeSec(input) {
  if (!input) return false;
  return input.toLowerCase() == input.toLowerCase().split("").reverse().join("");
}

console.log(isPalindrome(""));
console.log(isPalindromeSec("Küllük"));
