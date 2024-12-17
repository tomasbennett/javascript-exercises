const reverseString = function(str) {
    if(str.length < 0 || typeof str !== "string") return "Error: A valid string data type with a length greater than zero is necessary.";
    let revStr = [];
    [...str].forEach(element => {
        revStr.unshift(element);
    });
    return revStr.join('');
};

// Do not edit below this line
module.exports = reverseString;
