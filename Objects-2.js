// A New way to create objects in javascript.

// First initialize a variable and make that variable a new objects.
let a  = new Object();

// Now you can give variable a which is now an obejcts any properties or values you want at any time you want.

a.firstName = "Muhammad",
a.lastName  = "Shakir",
a.skills = ["HTML","CSS","JavaScript","Tailwind CSS","Git","Ajax","WebAPI"],
a.fullName = function(){
    return this.firstName + " " + this.lastName;
}

// Now simply print the values.
console.log(a.fullName());
console.log(a.skills);
