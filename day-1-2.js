/********* variables let-const */

const name = "Aman";
let age = 21;
console.log(name);
console.log(age);
// name = "Amn"; // throw error
age = 22;
console.log(age);

/********* Arrow functions */
// // normal function

function add(a, b) {
    console.log(a+b);
}
add(5,2);

// new way, arrow functions

const greet = name2 => console.log(`Hello ${name2} !`);
greet("Aman");

const add = (a,b) => a+b;
// or it can be 
const add = (a,b) => {
    return a+b;
}

console.log(add(5,7));



/********* Template Literals */
const name3 = "Aman";
console.log(`Hello Mr. ${name3}`);


const name4 = "Aman";
const skills = "JS";
console.log(`Hi ${name4} you are learning ${skills}`);


/********* Destructuring */
const user = {
    name: "Aman",
    age: 21,
    skill: null,
    city: "Mohali",
};

console.log(user.name);
console.log(user.age);
console.log(user.city);

const {namee, agee, skille, city} = user; // this is used in react very much, props and API
console.log(name);
console.log(age);
console.log(skill);
console.log(city);

/******** Array Destructuring */
const skills2 = ['laravel', 'whmcs', 'react', 'node'];
const [a,b,c,d] = skills2;
console.log(a);
console.log(b);
console.log(c);
console.log(c);



/********** Spread Operator */
// // Array
const numbers = [1,2,3,4,5,6,7];
console.log(numbers);
const newNums = [...numbers, 8,9];
console.log(newNums);

// // object 
const arr = {
    name: "Aman",
    age: 21,
};
console.log(arr);
const newArr = {...arr, city:"Mohali"};
console.log(newArr);



/********* Rest operator */
const sum = (...number) => {
    return number.reduce((a,b) => a+b);
}

console.log(sum(1,2,3,4,5));




/********** PRACTICE */
// // arrow function

const multiply = (a,b) => a*b;

console.log(multiply(4,5));


// template literals

const names = "Aman";
const skill = "MERN";

console.log(`${names} is learning ${skill}`);


// // object destructuring

const dev = {
 name:"Aman",
 experience:2,
 stack:"PHP"
};

const {experience,stack} = dev;

console.log(experience);
console.log(stack);


// // array destructuring

const tools = ["VS Code","Git","Node"];

const [first,second] = tools;

console.log(first);
console.log(second);


// // spread operator

const bkend = ["Node","Express"];

const fullstack = [...bkend,"React","MongoDB"];

console.log(fullstack);


// // rest operator

const total = (...nums) => {
 return nums.reduce((a,b)=>a+b);
};

console.log(total(5,10,15));



/******** TASKS */

/** #1 Create object: developer, 
 * fileds: name, skills, experience, 
 * Destructure and print: Aman has 2 years experience  */

const devv = {
    name: "Aman",
    skills: "php",
    experience: 2,
};

// console.log(`${developer.name} has ${developer.experience} years experience`);

// better version
const developer = {
    name: "Aman",
    skills: "php",
    experience: 2,
};
const {namess, experiencess} = developer;
console.log(`${namess} has ${experiencess} years experience`);
/** #2 Merge arrays:
 * frontend = ["HTML","CSS"]
 * backend = ["Node","Express"]
 * 
 * ["HTML","CSS","Node","Express"]
 * 
 * Output: Use spread operator.
 */
const frontend = ["HTML","CSS"];

const merge1 = [...frontend, "Node","Express"];
console.log(merge1);

// better code

const frontend2 = ["HTML","CSS"];
const backend = ["Node","Express"];

const merge2 = [...frontend2, ...backend];
console.log(merge2);

/** #3 Create function:
 * Input average()
 * Output: 20
 * Use rest operator.
 */

const average = (...nums) => {
    const count = nums.length;
    const total = nums.reduce((a,b) => a+b);
    return total/count;
}

console.log(average(10,20,30));




