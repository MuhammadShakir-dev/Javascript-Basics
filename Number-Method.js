  // there are seven methods that are used in number methods.
  // number methods in js
  // Write a javascript program in which take a number in the form of a string and add +10 in that string number and show the result.

  // Step no 1 : Get input from user.
  let getUser = prompt("Enter a number i will add plus 10 in that : "); 
  // Step no 2:  Use Number method to convert string into number.
  let num = Number(getUser);
  // Step no 3 : Print the final result with addition of 10.
  console.log(num + 10);


  //parseInt
  let userGet = prompt("Enter a decimal number i will convert that no interger : ");
  let num = parseInt(userGet);
  console.log(num)

  //pasrseFloat
  let userGet = prompt("Enter a decimal no i will add 5 in that : ");
  let num = parseFloat(userGet);
  console.log(num + 5);

  // Note that all the functions that are starting from is only return boolean values that is true and false. Because they are mostly used to check the conditions.
  // you have to use isFinite and isInteger with Number. i.e = Number.isFinite and Number.isInteger
  // isFinite()  is used to check that weather your number is finite or infinite.
  let userGet = prompt("Enter a no i will tell you it's finite or not : ");
  let num = isFinite(userGet);
  console.log(num);

  // inInteger() is used to check that weather your number is an integer or not.
  let userGet = prompt("Enter a no i will tell is it an integer or not : ");
  let num = Number.isInteger(userGet);
  console.log(num);

  // toFixed() used to show lumsum value or you can say roundoff value after point.
  let userGet = parseFloat(prompt("Enter a value i will round of that value : "));
  let num  = userGet.toFixed(2);
  console.log(num);

  // toPrecision()
  // toPrecision() used to round off proper values if the value after the points are bigger than 5 it will roundoff it if not the same value will printed.
  let userGet = parseFloat(prompt("Enter a value i will round of that value : "));
  let num  = userGet.toPrecision(2);
  console.log(num);





