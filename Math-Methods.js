  // there are 12 maths methods used in javscript.
  // ceil()
  // floor()
  // round()
  // trunc()
  // max(x,y,z.........,n)
  // min(x,y,z,........,n)
  // sqrt()
  // cbrt()
  // pow()
  // random()
  // abs()
  // pi

  // it is mostly used in complex accounting applications, used for making video games and also used for animation.
  // You should use Math before using any of the following maths mthods.

  // Ceil is used for roundoff your value for positive value input the output is there uper value.
  // for input negative value the output is its downside value.
  let userInput = prompt("Enter a value i will rounudoff it : ");
  let x = Math.ceil(userInput);
  console.log(x);

  // floor is simply the reverse iof ceil it will print upward value for positive negative onces and donwards values for positive once.
  let userInput = prompt("Enter a value : ");
  let x = Math.floor(userInput);
  console.log(x);

  // Rround is simply rounds offs your given input if your input is in decimal and the value after the point is bigger than .5 then it will upward it if not it will donward roundoff it.
  let userInput = prompt("Enter a value for round off : ");
  let x = Math.round(userInput);
  console.log(x);

  // trunc() will only return you an interger value not a decimal value.
  let userInput = prompt("Enter a decimal value i will convert it into integre : ");
  let x = Math.trunc(userInput);
  console.log(x);

  // max() is used to find the maximun number from your given inputs.
  // min() us used to find the minimum number from your given inputs.

  let x = Math.min(2,4,5,6,7);
  console.log("The minimum value is  : " + x);

  let y = Math.max(10,20,30,40);
  console.log("The maximum value is  : " + y);


// sqrt() use to find the square root of any number
// cbrt()  use to find the cube root of any number

  let userInput = parseInt(prompt("For cbrt enter 1 and for sqrt enter 2 : "));
  if(userInput === 1){
      let x = parseInt(prompt("Enter a number : "));
      let y = Math.cbrt(x);
      console.log("The cubic root of this no is  : " + y);

  }
  else if(userInput === 2){
      let a = parseInt(prompt("Enter a number : "));
      let b = Math.sqrt(a);
      console.log("The square root of this no is  : " + b);
  }
  else{
      console.log("please select right operation");
  }
    
    // pow() is used to find the power of any value, there are two parameters in it one is the base and the other is how many time your want to multiply the number itself
    let usrInput = Math.pow(4,3);
    console.log("The ans is  : " + usrInput);

    // Random number guessing game in javascript using Math.random() function.
    // Random Number guessing game in javascript.
    let score = 0;

    function randomNumber() {
      return Math.floor(Math.random() * 10) + 1;
    }

    function startGame() {
      const guessNumber = randomNumber();
      const usrInput = parseInt(prompt("Guess a number between 1 to 10  : "));

      if (usrInput === guessNumber) {
        score += 5;
        alert(`Congratulations you guess the right number your score is ${score}`);
        const playAgain = confirm("Do you want to play again ? ");
        if (playAgain) {
          return startGame();
        } else {
          alert(`Thanks for playing your score is ${score}`);
        }
      } else {
        alert(`Sorry you guess the wrong number the number was ${guessNumber}`)
        startGame()
      }
    }

    startGame();

  // we have covered all maths functions and methods now the last one is our property which is called PI it is used to print the value of Pi.
  let pi = Math.PI;
  console.log("The value of PI is  : " + pi);






