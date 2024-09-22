function print()
{
    console.log("Sample.")
}

print.power = 2

print()
console.log(print.power)
console.log(print.prototype); // returns the implicit this of function + the built-in properties

function createUser (username, score){
    this.username = username;
    this.score = score;
};

createUser.prototype.increment = function()
{
    this.score++;
}