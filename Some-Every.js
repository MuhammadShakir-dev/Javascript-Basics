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

let ages = [10, 12, 13, 17, 11];
let adultAge = ages.some(checkAdult);
console.log(adultAge);

function checkAdult(age) {
    return age >= 18 
};

// every works same as some but.
// every only give ture when all the conditions are true.
let ages = [18, 19, 20, 21, 19];

function checkAdult(age){
    return age >= 18
}

let adultAges = ages.every(checkAdult);
console.log(adultAges);


 
