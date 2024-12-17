const sumAll = function(...ints) {
    let allInts = ints.every(elem => {
        return Number.isInteger(elem) && elem > 0;
    });
    if(allInts){
        let acc = [];
        let arr = ints.sort((a, b) => a - b);
        for (let i = arr[0]; i <= arr[1]; i++){
            acc.push(i);
        }
        let result = acc.reduce((el, ac) => ac + el, 0);
        return result;
    }
    return "ERROR";

};

// Do not edit below this line
module.exports = sumAll;
