  // date methods in javascript
  // there are 16 methods that we will learn in this tutorial.
  // before getting our hands dirty with date methods some important thing that you should know.
  // You can use date methods by creating a varibale a new date object.

  // now by writing new Date() demodate has become an object of date method.
  let demoDate = new Date();
  console.log(demoDate);

  // toDateString for converting date into readable format.
  console.log(demoDate.toDateString());

  // date methods in javascript

  let dateDemo = new Date();

  // to see the date in proper order
  console.log(dateDemo.toDateString());

  // to just print the date
  console.log(dateDemo.getDate());

  // to get full year
  console.log(dateDemo.getFullYear());

  // to get month
  // for january its 0 and for december its 11
  console.log(dateDemo.getMonth());

  // to get day
  // for monday it's 1 and for sunday it's 1
  // monday 1
  // tues 2
  // wed 3
  // thursday 4
  console.log(dateDemo.getDay());
