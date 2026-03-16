/** #### DAY 4 */

/** *********************** Async JavaScript ********************* */

// JavaScript is single-threaded, meaning it can run one task at a time.
// But many operations take time:
// API requests
// database queries
// reading files
// timers

// Example:

console.log("Hello A");

setTimeout(() => {
    console.log("Hello B");
}, 2000); // 2 seconds

console.log("Hello C");

// ************* JS does not wait for the timer.
// ************* This is asynchronous behavior.

// ******* PROMISE *************
// A promise represents a value that will be available in the future 
//  pending, resolved(fulfilled), rejected

const promise = new Promise((resolve, reject) => {
    const state = true;

    if(state) {
        resolve("State is true");
    } else {
        reject("State is false");
    }
});

promise
    .then(data => console.log(data))
    .catch(err => console.log(err));



/** ************** async / await ********************** */
// instead of .then(), modern code uses async/await

const getData1 = async() => {
    return "Hello from sync function.";
}

getData1().then(res => console.log(res));

// ********** better usage **********
const getData2 = async() => {
    return "Hello... Aman Kumar!";
}
 
const run = async() => {
    const response = await getData2();
    console.log(response);
} 

run();


/** ************* Error Handling with try/catch ************** */

const fetchData = async() => {
    try {
        const result = await Promise.resolve("Success");
        console.log(result);
    } catch(error) {
        console.log("Error:", error);
    }
}

fetchData();





/** ************************ Fetch API (API Requests) ******************************* */

const getUsers = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);  
}

getUsers();


/** ********************************* TASKS ********************************* */


// ## 1. Create a function: getNumber() It should return a Promise that resolves after 1 second with number 10.

const getNumber = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10);
        },1000)
    })
}

console.log(getNumber());



/** ################ ****************** RESUME ALL AGAIN TOMMARROW ****************** ################ */

// ### For better understanding ###

console.log("Start");

setTimeout(() => {
    console.log("Hello Aman..!");
}, 2000); // 2 seconds

console.log("End");

/** *** Promise: A promise represents a value that will come later.
It has three states:
pending, fulfilled, rejected
*/

// example

const getUsr = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve({
                name: "Aman",
                age: 21,
            });
        }, 2000);
    });
}

getUsr().then(user => {
    console.log(user);
});



// in modern js instead of .then() we use async/await 

const runn = async() => {
    const user = await getUsr();
    console.log(user);
}

runn();


/** Real MERN Example */
// const getusers = async (req, res) => {
//     try {
//         const users = await User.find();
//         res.json(users);
//     } catch(error) {
//         res.status(500).json({message: "Server error"});
//     }
// } 









