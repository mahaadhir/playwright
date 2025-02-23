
//Escape Sequence

let test = 'Mahaadhir\'s';
console.log(test);

//Concatenation

let fName = "Mahaadhir";
let lName = "Muhammed";
console.log(fName.concat(lName));
console.log("My Name is "+fName+" "+lName);
console.log(`My Name is ${fName} ${lName}`);

//length

let course = "Playwright"
console.log(`The length of the string is ${course.length}`);

//charAt

console.log(`The fourth char is ${course.charAt(3)}`);

//index

console.log(`The index is w is ${course.indexOf('w')}`);

//include(true/false)

console.log(`The course starts with ${course.includes('Play')}`);

//slice - can also use minus values

console.log(`The course starts with ${course.slice(1,4)}`);
console.log(`The course starts with ${course.slice(-6,-1)}`);


// start index and end index -1

//split

console.log(`The course starts with ${course.split("")}`);

//substring

console.log(`The course starts with ${course.substring(7,4)}`);


