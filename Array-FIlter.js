// let's practice Array Filter.
// Arry FIlter works for all values of array.
// Array Filter checks the condition and make a spearters of all the values that satifies the condition.

let ary = [10,12,15,16,17,19,20,25,29,30];

function checkAdults(age){
    return age >=  18;
};

let search = ary.filter(checkAdults);
console.log(search);
