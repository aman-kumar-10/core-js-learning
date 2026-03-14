/** ****************** FUNCTIONAL JS ****************** */

// // ### map(): transform each item in an array. (a kind of looping, but transform the values)
const values = [1,2,3];
const multiplyValues = values.map(n => n*2);
console.log(multiplyValues);

// Real use:
const users = [
    {name:"Aman", age:21},
    {name:"Ramit", age:18}
];
const names = users.map(user => user.name);
console.log(names);

// // ### filter(): remove the items that not matched the conditions
const number = [20,15,18,25,11,21,66,8];
const filtered = number.filter(num => num > 20);
console.log(filtered);

// Real use:
const users1 = [
    {name:"Amn", active:true},
    {name:"Ramit", active:false},
    {name:"Rahul", active:true},
    {name:"Uday", active:false}
];
const actives = users1.filter(user => user.active);
console.log(actives);


// // ### reduce(): convert an array into single value

//
const nums = [20,30,40];
const sum = nums.reduce((sum, crr) => sum+crr, 0);
console.log(sum);

// Real use:
const orders = [
    {price:200},
    {price:400},
    {price:100},
    {price:300},
];
const total1 = orders.reduce((ttl, odr) => ttl + odr.price, 0);
console.log(total1);


// // ### Method Changing: combine methods (use more than 1 methods on an array values)
const numbers = [5,10,1,6,15,2,0,7];
const filtered2 = numbers.filter(num => num>5).map(num => num+1);
console.log(filtered2);



/** ********************** TASKS ********************** */
// #1. use map() to ["php","laravel","javascript"] in uppercase ["php","laravel","javascript"]
const skills = ["php","laravel","javascript"];
const upperCase = skills.map(skill => skill.toUpperCase());
console.log(upperCase);

// #2. use filter() to [15,18,22,30,12] get adult ages >= 18.
const ages = [15,18,22,30,12];
const adultsAges = ages.filter(age => age>=18);
console.log(adultsAges);

// #3. use reduce() to [200,150,300,50]; get total = 700.
const prices = [200,150,300,50];;
const total = prices.reduce((ttl, crr) => ttl+crr, 0);
console.log(total);


/**
 * #4. chaining
 * const users = [
    {name:"Aman",active:true},
    {name:"Rahul",active:false},
    {name:"Priya",active:true}
    ];
  * return names of active users  
    expected output: ["Aman","Priya"]
 */ 

const users2 = [
 {name:"Aman",active:true},
 {name:"Rahul",active:false},
 {name:"Priya",active:true}
];

const activeUsers = users2.filter(usr => usr.active).map(usr => usr.name);
console.log(activeUsers);


