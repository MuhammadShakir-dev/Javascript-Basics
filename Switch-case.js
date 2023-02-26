// Switch cases are also another from of if else condition.
// in which you can write conditions using camperision operators.
// the break in switch means that if any point or at any case if you condition becomes true the other conditions will not printed. 
// defualt work same as else.

let day = prompt("Enter a day i will tell you your class : ");
switch(day){
    case "monday": console.log("Game Development class")
    break;
    
    case "tuesday": console.log("Professional Practices class")
    break;
    
    case "wednesday": console.log("Information Security class") 
    break;
    
    case "thursday": console.log("Software Testing")
    break;
    
    case "friday": console.log("Web Engineering Class")
    break;
    
    case "saturday": console.log("weekend no class")
    break;
    
    case "sunday": console.log("weekend no class")
    break;
    
    default: console.log("enter a valid day with lower alphabats") 
}
