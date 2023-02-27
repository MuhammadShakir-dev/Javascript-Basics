// Function with return value means that you want to reuse the function later but not right now.

function fullName(fname,lname){
    var a = fname + " " + lname;
    return a;
}

var fn = fullName("Muhammad","Shakir");
console.log(fn);

// percentage calculator system.

function sum(Pf,Dsa,Oop){
    var a = Pf + Dsa + Oop;
    return a;
}

function percentage(tt){
    var per = tt/300 * 100;
    console.log(per);
}

var total = sum(90,80,88);
percentage(total);
