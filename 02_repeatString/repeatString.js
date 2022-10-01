const repeatString = function(string, number) {
    if(number<0)
    {
        return "ERROR";
    }
    else{
        return (string.repeat(number));
    }
};

repeatString("hey", 3);
repeatString("hey", 0);
repeatString("hey", 1);
repeatString("hey", 0);
repeatString("hey", -1);
const num = Math.floor(Math.random() * 1000)
repeatString("hey", num);
repeatString(" ", 10);


// Do not edit below this line
module.exports = repeatString;
