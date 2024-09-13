const array = Array(1, 2, 3);
const array2 = Array(4, 5, 6)
console.log([...array, ...array2])

array.unshift(9)
console.log(array)


array.shift();
console.log(array);

console.log(array.join(" "))

const another_array = [1, [2, 3, 14, 5, 6], 7, [6, 7, [4, 5]]]
console.log(another_array.flat(2))