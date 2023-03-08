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
