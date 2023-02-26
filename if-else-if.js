// when you want to set a scope of multiple conditions that have multiples answsers so there you can use if else if.

var per = prompt("Enter your Percentage : ");

if( per >= 80 && per <=100){
    console.log("you are in merit");
}
else if( per >= 60 && per <= 79){
    console.log("you are in first division");
}
else if( per >= 45 && per <= 59){
    console.log("you are in second division");
}
else if( per >= 33 && per <= 44){
    console.log("you are in third division");
}
else if( per < 33){
    console.log("you are fail");
}
else{
    console.log("enter a valid percentage between 0 - 100");
}

