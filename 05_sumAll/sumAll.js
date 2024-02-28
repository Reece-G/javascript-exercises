const sumAll = function(num1, num2) {
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
    if (num1 < 0 || num2 < 0) return "ERROR";

    let first, last;
    if (num1 > num2) {
        first = num2;
        last = num1;
    } else {
        first = num1;
        last = num2;
    }

    let sumAll = (last - first + 1)/2 * (first + last);
    return sumAll;
};

// Do not edit below this line
module.exports = sumAll;
