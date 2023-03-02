// how to modify and delete array elements in javascript.
 let ary = ["Muhammad Anas", 21, "BSSE"];
 console.log(ary);  // first print it without modifying.
 
ary[0] = "Muhammad Shakir";
console.log(ary);  // now let's print the modified array.

// how to delete any array element in js.

let ary1 = ["Google","Microsoft","GitHub","Meta"];
console.log(ary1) // first print the array without deleting any element.

delete ary[1];
console.log(ary) // lets print the array after deleting an element from it.

// note. delete will only remove the element but not it's space. the space  at which the index elemnet has placed are stiil there you can add a new element in it. i will show you how.
ary[1] = "Youtube";
console.log(ary);
