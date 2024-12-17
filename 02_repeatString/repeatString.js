const repeatString = function(str, iter) {
    if (iter < 0) return "ERROR";
    let acc = '';
    for (let i = 0; i < iter; i++){
        acc += str;
    }
    return acc;
};

// Do not edit below this line
module.exports = repeatString;
