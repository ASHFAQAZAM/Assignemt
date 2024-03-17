
//Question 02 Store a person’s name in a variable, and print a message to that person. Your message should
//be simple, such as, “Hello Eric, would you like to learn some Python today?”

let Person:string="Ashfaq"
console.log(`hello ${Person} would you like to learn python today?`);

//Question 03 Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase,
//and titlecase.

let Firstname:string="Ashfaq"
//in lowercase
console.log("lowercase:", Firstname.toLowerCase());
// in uppercase
console.log("uppercase:", Firstname.toUpperCase())
//in titalcase
console.log("titalcase:", Firstname.replace(/\b\w/g,c=>  c.toUpperCase()));