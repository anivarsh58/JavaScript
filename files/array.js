const array = Array(1, 2, 3);
const array2 = Array(4, 5, 6)
console.log([...array, ...array2])

array.unshift(9)
console.log(array)


array.shift();
console.log(array);

console.log(array.join(" "))

