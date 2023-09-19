//Is Unique: Implement an algorithm to determine if a string has all unique characters.

//First Solution
function isUnique(str){
    const word = str.split('');
    for(let i = 0; i < word.length; i++) {
        for(let j = i + 1; j < word.length; j++) {
            if(word[i].toLowerCase() === word[j].toLowerCase()) {
                return "Not Unique";
            }
        }
    }
    return "Unique";
}


//Second Solution
function isUniqueSecond(str){
    return [...str].reduce((acc,curr)=>{
        return acc.includes(curr) ? "Not Unique" : "Unique";
    })
}

//Third Solution 
function isUniqueWithSet(str){
    return new Set(str).size == str.length;
}

console.log(isUnique("XdssX"));
console.log(isUniqueSecond("Baris"));
console.log(isUniqueWithSet("Deneme"));
