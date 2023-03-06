//let's learn javascript objects.
// Objects are the advanced vresion of Array in javascript.
// Objects are denoted by {}.
// You can create an aray inside of an object.
// you can create multiple functions called methods inside of an object.
// you can print oibjects proerties inside of a function.
// we can make an nested objects inside of the same parent object.


// Example NO 1
let user1 = {
    fullName : "Muhammad Shakir",
    age : 21,
    skills : ["HTML","CSS","Javascript","Tailwind CSS","React.js","Node.js","Git"      ,"GitHub"],
    Salary : function(){
        return 55000;
    }
}

console.log(user1.fullName);
console.log(user1.age);
console.log(user1.skills);
console.log(user1.Salary());

// Example no 2.


let user1 = {
    fName : "Muhammad",
    lName : "Shakir",
    age : 21,
    skills : ["HTML","CSS","Javascript","Tailwind CSS","React.js","Node.js","Git"      ,"GitHub"],
    Salary : function(){
        return 55000;
    },
    
    fullName : function(){
        return this.fName + " " + this.lName;
    }
    
}

console.log(user1.fullName);
console.log(user1.age);
console.log(user1.skills);
console.log(user1.Salary());
console.log(user1.fullName());

// example 3.
//let's learn javascript objects.
// Objects are the advanced vresion of Array in javascript.
// Objects are denoted by {}.
// You can create an aray inside of an object.
// you can create multiple functions called methods inside of an object.

let user1 = {
    fName : "Muhammad",
    lName : "Shakir",
    age : 21,
    skills : ["HTML","CSS","Javascript","Tailwind CSS","React.js","Node.js","Git"      ,"GitHub"],
    Salary : function(){
        return 55000;
    },
    
    fullName : function(){
        return this.fName + " " + this.lName;
    },
    
    location : {
        city : "Karachi",
        Address : "a-1139 Gulshan-e-Hadeed phase-1",
        compLocation : function(){
        return this.city + " " + this.Address;
    }
    
},
    

    
}

console.log(user1.location.compLocation());
