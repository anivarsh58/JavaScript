const hashmap = new Map();

hashmap.set("IN", "India");
hashmap.set("FR", "France");

console.log(hashmap);

const array = [1, 2, 3, 4, 5];

for (const vari of array)
{
    console.log(vari);
}

for (const [key, value] of hashmap)
{
    console.log(`${key} : ${value}`);
}

object = {3 : 9,
    1 : 1,
    4: 16
}

for (const [key, value] in object) {
    console.log(key, " ", object[key]);
}

