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

Object.prototype.newFunction = function() {
    console.log("We did it.")
}

const chai = new createUser ("chai", 25);
const tea = createUser("tea", 250);

/* With new: It’s a constructor call, creating a new object and linking it to the prototype.
Without new: It’s just a regular function call, where this refers to the global object
(or undefined in strict mode), and no new object is created. */

/* https://chatgpt.com/share/66f0dd26-bd38-8005-b7e9-f62756ba0d8e */