/**
 * One Away: There are three types of edits that can be performed on strings: 
 * insert a character, remove a character, or replace a character. 
 * Given two strings, write a function to check if they are one edit (or zero edits) away.
EXAMPLE
pale, ple -> true 
pales, pale -> true 
pale, bale -> true 
pale, bake -> false
 * 
 */

const oneAway = (str1, str2) => {
    if (Math.abs(str1.length - str2.length) > 1) {
      return false;
    }
  
    let editCount = 0;
    str1 = str1.toLowerCase(); // Küçük harfe dönüştür
    str2 = str2.toLowerCase(); // Küçük harfe dönüştür
  
    for (let i = 0, j = 0; i < str1.length && j < str2.length; i++, j++) {
      if (str1[i] !== str2[j]) {
        editCount++;
        if (editCount > 1) {
          return false;
        }
  
        if (str1.length > str2.length) {
          j--;
        } else if (str1.length < str2.length) {
          i--;
        }
      }
    }
  
    return true;
  };
  
  console.log(oneAway("pales", "aleste")); // true