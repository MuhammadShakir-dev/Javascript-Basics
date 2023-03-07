// let's see how we can print all the values of an object in javascript using for in loop.

let user1 = {
    fullName : "Muhammad Shakir",
    department : "Software Engineering",
    section : "5-A"
};

let user2 ={
    fullName : "Abdullah Farroq",
    department : "Artifical Intelligence",
    section : "5-B"
}

// Now print the values of both objects using for/in loop.
for(let values in user1){
    console.log(values + " : " + user1[values]);
}

for(let keys in user2){
    console.log(keys + " : " + user2[keys]);
}
