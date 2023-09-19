//Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.

function checkPermutation(str1, str2) {
    if (str1.length !== str2.length) return false;

    const key = str1[0];
    if (str2.includes(key)) {
        const newStr2 = str2.split('').filter((val) => val !== key).join("");
        const newStr1 = str1.split('').filter((val) => val !== key).join("");
        if (newStr1.length === 1 && newStr1[0] === newStr2[0]) {
            return true;
        } else {
            return checkPermutation(newStr1, newStr2);
        }
    } else {
        return false;
    }
}

console.log(checkPermutation("testiimonials","tiestimonials"));
