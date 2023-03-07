// let see the use of const variable with array and objects.
// Overall you cannot change tor reassign const variables values.
// what if your array or oebjcts are const you can change its values by a trick.

const user0 = ["muhammad Shakir",21];
const user1 = {
    name : "muhammad shakir",
    age : 21,
}

// lets say i want to change both user1 and user0 values.
// worng way.
user0 = ["muhammad haris",22];
user1 = {
    name : "muhammad haris",
    age : 21
}

console.log(user0);
console.log(user1);

// right ways.
user0[0] = "muhammad haris";
user0[1] = 22;

console.log(user0);

user1.name = "Muhammad Shakir";
user1.age = 22;

console.log(user1.details())

