//-------------------section 3, lecture 30

//calculateAge(1999); ===== that does work !!! because its a function declarition so it works with hoisting !
//
// function calculateAge(year) {
//   console.log(2016 - year);
// }
//
// calculateAge(1999);
//
//
// // ret(1990); ====that doent work ! cause of hoisting ! because its a funcion experrison thats why !
//
// var ret = function(year) {
//   console.log(65 - (2016 - year));
// }
//
// ret(1990);
//
//
// // variables
// console.log(age); // undefined !!
// var age = 23;
//
// function foo() {
//   var age = 65;
//   console.log(age);
// }
// foo(); // 65 that ones belongs to the function !
//
// console.log(age); //23 that one is global !!


//-------------------section 3, lecture 31

// var a = 'hello';
// first();
//
// function first() {
//   var b = 'hi';
//   second();
//
//     function second() {
//       var c = 'hey';
//       console.log(a + b + c);
//     }
// }
//
// function third() {
//   var d = 'john';
//   console.log(c); /// this function has access to var a and d !!  :)
// }

//-------------------section 3, lecture 33

// console.log(this); refers to window object !!

// calculateAge(1985);
//
// function calculateAge(year) {
//   console.log(2016 - year);
//   console.log(this);
// }
//
// var john = {
//   name: 'john',
//   yearOfBirth: 1990,
//   calculateAge: function() {
//     console.log(this);
//     console.log(2018 - this.yearOfBirth);
//
//     function innerFunction() {
//       console.log(this); // that is a regular function so it referss to windows object again !
//       //even though it is in the method of calculate age it doesnt matter !
//     }
//     innerFunction();
//   }
// }
//
// john.calculateAge();
//
//
// var mike = {
//   name: 'mike',
//   yearOfBirth : '2000',
// };
//
// mike.calculateAge = john.calculateAge; //that calles borrowing , we borrowed the method from the john object !
// mike.calculateAge();


//-------------------section 3, lecture 34
