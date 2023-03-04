// lastindexOf just gives you the index number of array element you want to search. but if the element you are looking for are not present in the array 
// then it will show you -1 which means that the element you want to search are not present in this array. 

let xGdsc = ["Danella","Osama","Mahnoor","Usman","Shakir","Wajid"];
let nGdsc = ["Wajid","Shakir","Haris"];

let fGdsc = xGdsc.concat(nGdsc);
console.log(fGdsc);

let search = fGdsc.indexOf("Shakir",5);
console.log(search);


// for looking an element that is not present in array.
let xGdsc = ["Danella","Osama","Mahnoor","Usman","Shakir","Wajid"];
let nGdsc = ["Wajid","Shakir","Haris"];

let fGdsc = xGdsc.concat(nGdsc);
console.log(fGdsc);

let search = fGdsc.indexOf("Anum",0);
console.log(search);

// lastIndexOf wroks same as the indexOf but from the last of your array.

let xGdsc = ["Danella","Osama","Mahnoor","Usman","Shakir","Wajid"];
let nGdsc = ["Wajid","Shakir","Haris"];

let fGdsc = xGdsc.concat(nGdsc);
console.log(fGdsc);

let search = fGdsc.lastIndexOf("Shakir", 6);
console.log(search);
