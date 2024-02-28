const removeFromArray = function(array, ...items) {
    let removeCount = 0;
    // iterate through the array 
    for (let i = 0; i < array.length; i++) {
        // iterate through ...items
        for (let j = 0; j < items.length; j++) {
            if (items[j] === array[i]) {
                // remove item from array if it matches 
                array.splice(i, 1);
                i--;    // decrement i as the length of the array has decreased
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
