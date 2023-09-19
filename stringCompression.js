/**
 * String Compression: Implement a method to perform basic string compression using the counts of repeated characters.
 * For example, the string aabcccccaaa would become a2blc5a3,
 * If the "compressed" string would not become smaller than the original string,
 * your method should return the original string.
 * You can assume the string has only uppercase and lowercase letters (a - z).
 */

function stringCompress(string) {
  var mapAllRepition = new Map();
  let stringArr = string.split('');
  // then, loop for i = 0 to stringArr.length do
  // you can access array element using i
  for (let i = 0; i < string.length; i++) {
    mapAllRepition.set(stringArr[i], (mapAllRepition.get(stringArr[i]) || 0) + 1);
  }
  
  const arr = [];

  const pushArr = (value,key)=>{
    arr.push(`${key}${value}`);
  }

  mapAllRepition.forEach(pushArr);
  
  return arr.reduce((acc,curr)=>acc+curr);
}

console.log(stringCompress("aabcccccaaadddddddddddd"));
