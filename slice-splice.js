// if you want to print out some specific values from array then use slice.
//  slice has two parameters slice(start,end)
// let's practice it. here i want to print out shakir, rehan, and saad so i give a starting point to it which is from index-1 and an ending point which
// is index-4

let ary = ["Hais","Shakir","Rehan","Saad","Wajid"];
let f_ary = ary.slice(1,4);
console.log(f_ary);

//  if you don't want to add new values in the starting or at the ending of your array then use splice.
// note one thing that splice don't create a new array it just make changes to the existing array.
// you have to pass three parameters in splice and these three parameters are : "From Where you want to add", "How many you want to deelete", "New values"

let xGdsc = ["Danella","Osama","Usman","Urwa","Mahnoor"];
console.log(xGdsc);

xGdsc.splice(1 , 4, "Wajid","Shakir","Anum","Haris","Shiza");
console.log(xGdsc);

