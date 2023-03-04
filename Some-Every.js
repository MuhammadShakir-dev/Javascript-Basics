// check weather tha condition is ture or not.   
// some return only ture and fasle boolean values.
// some only work whne you call a fucntion with in that.

let ages = [10, 12, 13, 17, 19];
let adultAge = ages.some(checkAdult);
console.log(adultAge);

function checkAdult(age) {
    return age >= 18 
};

// for fasle.
// check weather tha condition is ture or not.   
// some return only ture and fasle boolean values.
// some only work whne you call a fucntion with in that.

let ages = [10, 12, 13, 17, 11];
let adultAge = ages.some(checkAdult);
console.log(adultAge);

function checkAdult(age) {
    return age >= 18 
};


 
