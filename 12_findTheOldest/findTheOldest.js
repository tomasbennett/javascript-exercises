const findTheOldest = function(objArr) {
    let arr = [];
    const today = new Date();
    objArr.forEach(element => {
        let year = element?.yearOfDeath ?? today.getFullYear();
        arr.push(year - element.yearOfBirth);
    });
    let index = arr.indexOf(Math.max(...arr));
    return objArr[index];
};

// Do not edit below this line
module.exports = findTheOldest;
