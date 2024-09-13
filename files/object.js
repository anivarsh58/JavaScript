// Object.create()

ageSymbol = Symbol("symbol")

const obj = {
    key1 : "value1",
    key2 : "value2",
    [ageSymbol] : 18
};

console.log(obj.key1, obj["key2"], obj[ageSymbol])
