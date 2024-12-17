const palindromes = function (str) {
    let strTrim = str.replace(/[.,! ]/g, '').toLowerCase();
    let arr = [];
    [...strTrim].forEach(elem => {
        arr.unshift(elem);
    });
    return arr.join('') == strTrim;
};

// Do not edit below this line
module.exports = palindromes;
