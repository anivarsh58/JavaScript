const hashmap = new Map();

hashmap.set("IN", "India");
hashmap.set("FR", "France");

console.log(hashmap);

const array = [1, 2, 3, 4, 5];

for (const vari of array)
{
    console.log(vari);
}

// Maps aren't iterable in JS.
// So, "for ... in" loop doesn't work on them.

for (const [key, value] of hashmap)
{
    console.log(`${key} : ${value}`);
}

object = {hello : 9,
    okay : 1,
    no: 16
}

// console.log(object.3); Can't access properties that begin with a number using dot-notation.

for (const key in object) {
    console.log(key, " ", object[key]);
}

// the above loop treats array as an object with the indices being the keys

