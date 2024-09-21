const promise = new Promise(function(resolve, reject) {

    setTimeout(function() {
        console.log("Asynchronous code is executed.");
    }, 1000);
    resolve();
});

promise.then(function()
{
    console.log("Promise consumed.");
})


