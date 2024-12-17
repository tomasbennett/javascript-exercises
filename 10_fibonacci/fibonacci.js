const fibonacci = function(num) {
    let posNum = parseInt(num);
    if(posNum < 0) return "OOPS";
    if(posNum == 0) return 0;
    if(posNum == 1) return 1;
    if(posNum == 2) return 1;

    let arr = [1, 1];
    for (let i = 2; i <= posNum; i++){
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[posNum - 1];
};

// Do not edit below this line
module.exports = fibonacci;
