/**URLify: Write a method to replace all spaces 
 * in a string with '%20'. You may assume that the string has sufficient 
 * space at the end to hold the additional characters, and that you are given the "true" length of the string. (
 * Note: If implementing in Java, please use a character array so that you can perform this operation in place.)
EXAMPLE
Input: "Mr 3ohn Smith 13 Output: "Mr%203ohn%20Smith" */

//1st Solution
function URLify(input){
    const arr = input.split('');
    for(let i=0; i<arr.length; i++){
        if(arr[i] == ' '){
            arr[i] = '%20';
        }
    }

   return arr.join('');
}

//2nd Solution
function URLifyWithReduce(input){
    const arr = input.split('');

    const result = arr.reduce((acc,curr)=>{
        return curr === ' ' ? acc + '%20' : acc + curr;
    },[])

    return result;
}

console.log(URLify('Bari s '));
console.log(URLifyWithReduce('Bari s '));