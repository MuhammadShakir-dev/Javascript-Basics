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

  // Ceil is used for roundoff your video for positive value input the output is there uper value.
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

  let userInput = [1,2,33,39,10,100];
  let x = Math.max(...userInput);
  console.log(x);

  let userInput = [1,2,33,39,10,100];
  let x = Math.min(...userInput);
  console.log(x);
