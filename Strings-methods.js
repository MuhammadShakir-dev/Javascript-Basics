// let's understand Js String methods.
// we are goning to cover 22 string methods and the first one is property.
// which is string lenght
// lenght is used to find the lenght of out string.

        let str = "Hello World It's me Muhammad Shakir-dev";
        let x = str.length;
        document.write(str + "<br><br>");
        document.write("The lenght of this string is  : " + x);

// now let's lean toUpperCase() and toLowerCase() sting methods in js.
        let str = "Hello World It's me Muhammad Shakir-dev";
        let x = str.toLowerCase();
        document.write(x + "<br><br>");
        x = str.toUpperCase();
        document.write(x)

// includes use for searching something inside of your existing string. and if the letter or word you are seaching for is present in the exsisting ary then\
// it will show you boolean true and if not it will show you boolean fasse.

        let str = "Hello World It's me Muhammad Shakir-dev";
        let x = str.includes("Hello");
        document.write(x);

        let str = "Hello World It's me Muhammad Shakir-dev";
        let x = str.includes("wajid");
        document.write(x);

/// noe we have two new methods one is startsWith() and second is endsWiths().
// both of these will give you the output in boolean trure or false.

let str = "Muhammad Shakir";
let x = str.startsWith("Muhammad");
console.log(x);

x = str.endsWith("Haris");
console.log(x);

// search works same as includes but it haa a little bit diference because.
// includes print just boolean ture and false but search prints the index number
// of the word you are looking for.

let str = "Muhammad Shakir";
let x = str.search("Shakir");
console.log(x);


// match works same as includes and search but it will create an array of the words you are  searching for.
let str = "Hello World this is me Muhammad Shakir dev. Im an Opensource Contributor and a Front-end Develoepr and a content creator";
let x = str.match("and");
console.log(x);

// indexOf and lastIndexOf work same as arrays methods .
// indexOf start from the begineening of your string and show the index number of
// the word you are searching for. And last indexOf start with the end of you arrray.


    let str = "Hello This is Muhammad Shakir. He is a Developer";
    let x = str.indexOf("is");
    console.log(x);
    
    x = str.lastIndexOf("is");
    console.log(x);

// lets understand replace. Is used to replace a word with a new word.

let str = "Html, CSS, TailwindCSS, Javascript, NodeJs";
let x = str.replace("CSS","CSS-3");
console.log(x);

// here i'm replace are with is using local parameters. 
let skills  = "My skills are in front-end development";
let a = skills.replace(/are/g , "is");
console.log(a);

// trim is used to remove all the extra spaces from the left and right side of your string.
let str = "       javascript      ";
let b = str.trim();
alert(b);


