var Person = "Ashfaq";
console.log("hello ".concat(Person, " would you like to learn python today?"));
//Question 3 Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase,
//and titlecase.
var Firstname = "Ashfaq";
//in lowercase
console.log("lowercase:", Firstname.toLowerCase());
// in uppercase
console.log("uppercase:", Firstname.toUpperCase());
//in titalcase
console.log("titalcase:", Firstname.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
