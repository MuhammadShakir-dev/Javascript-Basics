// there are three tyepes of methods that are used in arrays.
// toString().
// valueOf().
// fill().

// toString() are sinmply coverts any type of Array into a sigle string.
// Note : After coverting it to a srting you will not be able to apply any array function or methods on it.
let ary = ["Muhammad","Shakri","Dev"];
ary.toString();
console.log(ary);
console.log(typeof(ary));


// ValueOf is default funciton of array to print all of its values.
let ary = ["Muhammad","Shakri","Dev"];
console.log(ary);

let ary1 = ["Muhammad","Haris"];
ary1.valueOf();
console.log(ary1);

//fill() is used to add a static values to the current array.
let ary = ["Muhammad Shakir","Muhammad Haris","Rehan Sattar"];
ary.fill("-Dev");
console.log(ary);
