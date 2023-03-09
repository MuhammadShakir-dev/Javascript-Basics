// lets start with charAT.
// in charAT you will define a position and at that position if any character is present then that character will be printed.

       let name = "Muhammad Shakir";
       let x = name.charAt(10);
       console.log(x);

// charCodeAt()
        let userget = prompt("Enter an aplhabet or symbol : ");
        let find = userget.charCodeAt();
        console.log(find);

// fromCharCode()
        let find2 = String.fromCharCode(97);
        console.log(find2);

// repeat()
// Repeat method or funciton are simply repeats or print your string mutiple time you to your given input.

       let str = "hello world ";
       let finalStr = str.repeat(10);
       console.log(finalStr);

// String split function or method split every word of a string and make a seperate array of that.

       let str = "I'm a Front-end Engineer";  // string 
       let finalStr = str.split(" ");  // split() function     
       console.log(finalStr);  // Output
       console.log(typeof(finalStr)); // Output "Object"
