const reverseString = function(string) {
    let stringArray = [];
    // for loop for each letter of string 
    for (let i = 0; i < string.length; i ++) {
        // attach the first letter to the end of stringArray using the length of string
        let index = string.length - (i + 1);
        stringArray[index] = string[i];
    }
    
    let reversedString = "";
    // for loop to iterate array and create reversed string
    for (letter of stringArray) {
        reversedString += letter;
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
