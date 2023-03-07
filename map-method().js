// lets understand the use of map methods in objetc  and arrays.

let ary = [1,2,3,4,5,6,7,8,9,10];
function test(x){
    return x*2;
};

let finalary = ary.map(test);
console.log(finalary);


let a = [
    
    {name : "muhammad shakir", age  : 21},
    {name : "muhammad haris", age : 21}
    ]
    
function test1(x){
    return x.name + " " + x.age;
}

let b = a.map(test1);
console.log(b);
