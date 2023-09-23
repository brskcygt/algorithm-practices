function capitalize (str) {
   if(str == "") return;
   
   let ch = "";
   const result = [];
   
   for(let i=0;i<str.length;i++){
    if(i % 2 == 0) {
        ch = str[i].toUpperCase();
        result.push(ch);
    }else{
        ch = str[i].toLowerCase();
        result.push(ch);
    }
   }
   
   return result.join("");
}

console.log(capitalize("te st"))