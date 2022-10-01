const reverseString = function(words) {
    return (words.split("").reverse().join(""))
}

reverseString("hello");
reverseString("hello there");
reverseString('123! abc!');
reverseString('');

// Do not edit below this line
module.exports = reverseString;

//var str = "hello";
//console.log(str.split("").reverse().join(""))
//for(let x=str.length() -1; x>0; x--)
//{
    