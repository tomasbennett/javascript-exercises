const getTheTitles = function(objArr) {
    let arr = [];
    objArr.forEach(element => {
        for (let [key, val] of Object.entries(element)){
            if (key == "title") arr.push(val);
        }
    });
    return arr;
    
};

// Do not edit below this line
module.exports = getTheTitles;
