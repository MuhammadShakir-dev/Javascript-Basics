// find array
var a = [10,29,18,21];
function checkAdult(age){
    return age >=18;
}

let search = a.find(checkAdult);
console.log(search);


// findexIndexOf
var a = [10,29,18,21];
function checkAdult(age){
    return age >=18;
}

let search = a.findIndex(checkAdult);
console.log(search);
