const promise = new Promise(function(resolve, reject) {

    setTimeout(function() {
        console.log("Asynchronous code is executed.");
        resolve();
    }, 1000);
    
});

promise.then(function()
{
    console.log("Promise consumed.");
})

const promiseTwo = new Promise(function(resolve, reject)
{

});