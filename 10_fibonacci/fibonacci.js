const fibonacci = function(index) {
    if (index < 0) 
        return("OOPS")
    return fib(1, 0, 0, index-1)
};

function fib(lastNumber, total, count, index) {
    if (count > index) {
        return total
    }
    count++
    return fib(total, lastNumber + total, count, index)
}

// Do not edit below this line
module.exports = fibonacci;
