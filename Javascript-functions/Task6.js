const reverseString = (str) => {
    new_str = ""
    for (let i = str.length-1; i >=0; i--) {
        new_str = new_str + str[i]
    }
    return new_str;
 }

console.log(reverseString("code"));
console.log(reverseString("hello"));