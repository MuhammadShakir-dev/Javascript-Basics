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
