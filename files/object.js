// Object.create()

ageSymbol = Symbol("symbol")

const obj = {
    key1 : "value1",
    key2 : "value2",
    [ageSymbol] : 18
};

const {key1 : placeholder} = obj;
console.log(placeholder)

console.log(obj.key1, obj["key2"], obj[ageSymbol])

obj.greeting = function() {
    console.log(`Hello! This is the value of ${this.key1}`);
}

obj.greeting()

const tinderUser = new Object()

const obj1 = {a : 1, b : 2};
const obj2 = {c : 3, d : 4};

let obj3 = Object.assign({}, obj1, obj2)
console.log(obj3);


obj3 = {...obj1, ...obj2}
console.log(obj3);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

