// concat means to add to different arrays.
// in js you can concat arrays in different ways but i will tell you only how to concat arrays using just concat() function.
// you can concat upto multiple arrays if you want.

 let team1 = ["Shakir","Wajid","Haris"];
 let team2 = ["Anum","Anas","Ammad"];
 let team3 = ["jamal","hadi"];
 
 console.log(team1);
 console.log(team2);
 
 let finalteam = team1.concat(team2,team3);
 console.log(finalteam);
 
// join() simply joins all the array value and truned it into a sngel string.
// you can use symbols between elements.

 let dev = ["Muhammad","Shakir","Dev"];
 let fname = dev.join(" - ");
 console.log(fname);
 console.log(typeof(fname));

// example no 3
// write a program in js in which concat two arrays and then join that arrays to form a single string.

let ary1 = ["Muhammad","Shakir","Dev"];
let ary2 = ["Muhmmad","Haris","Dev"];

let fary = ary1.concat(ary2);
console.log(fary);

let testary = fary.join("-");
console.log(testary);
