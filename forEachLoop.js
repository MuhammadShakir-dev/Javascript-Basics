let team = ["Muhammad Shakir","Anum Mustafa","Shiza Junaid","Haris Awan"];
function tLoop(value, index){
    console.log(index + " " + value)
}
team.forEach(tLoop);


// another way of using forEach loop
let team1 = ["Muhammad Shakir","Anum Mustafa","Shiza Junaid","Haris Awan"];
team1.forEach(function(value, index){
console.log(index + " " + value)
})
