const removeFromArray = function(arr, ...rem) {
    let newArr = [];
    arr.forEach(elem => {
        if(!rem.includes(elem)){
            newArr.push(elem);
        }
    })
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
