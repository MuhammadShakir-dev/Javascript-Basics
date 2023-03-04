// find array
// print out the element that satifying the condition.
var a = [10,29,18,21];
function checkAdult(age){
    return age >=18;
}

let search = a.find(checkAdult);
console.log(search);


// findexIndexOf
// prints the index number if the elemnt which is satisfying the condition.
var a = [10,29,18,21];
function checkAdult(age){
    return age >=18;
}

let search = a.findIndex(checkAdult);
console.log(search);
