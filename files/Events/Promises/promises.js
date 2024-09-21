// const promise = new Promise(function(resolve, reject) {

//     setTimeout(function() {
//         console.log("Asynchronous code is executed.");
//         resolve();
//     }, 1000);
    
// });

// promise.then(function()
// {
//     console.log("Promise consumed.");
// })

// const promiseTwo = new Promise(function(resolve, reject)
// {
//     setTimeout(function() {
//         console.log("Asynchronous code is executed.");
//         resolve({username : "Chai", password : "Okay"});
//     }, 1000);
// });

// promiseTwo.then(function(user) {
//     console.log(user.username, user.password);
// });

// const promiseThree = new Promise(function(resolve, reject)
// {
//     let error = false;
//     if (!error)
//     {
//         setTimeout(function ()
//     {
//         console.log("Async function.");
//         resolve({username : "anivarsh58", fullName : "Tanishq Varshney"});
//     }, 1000);
//     }
//     else
//     {
//         reject("ERROR!");
//     }
// });

promiseThree.then((user) => {
    console.log(user.username, user.fullName);
    return user.username
}).then((username) => 
{
    console.log(username)
}).catch((error) => console.log(error))
.finally(() => {
    console.log("The issue has either been resolved or rejected.");
});

const promiseFour = new Promise(function(resolve, reject)
{
    let error = false;
    if (!error)
    {
        setTimeout(function ()
    {
        console.log("Async function.");
        resolve({username : "anivarsh58", fullName : "Tanishq Varshney"});
    }, 1000);
    }
    else
    {
        reject("ERROR!");
    }
});

async function consumePromiseFour() {
   const response = await promiseFive;
   console.log(response);
}