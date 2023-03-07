// let's understand how to create objects inside of an array.
// And how to print this array of objects with the help of for loop.

// First initiallize a varibale of data array. and create an obejct in it.
let student  = [
    
    {name : "Muhammad Shakir", rank : 1},
    {name : "Muhammad Haris", rank  : 2},
    {name : "Syed Wajid" , rank : 3}
    
    ];

// now let's create a fro loop to print all value.

for(let a = 0; a < 3; a ++){
    document.write("Name : " + student[a].name + " , " + "Rank : " + student[a].rank);
};
