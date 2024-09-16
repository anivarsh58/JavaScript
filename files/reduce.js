const myNums = [1, 2, 3];

const initialValue = 0

console.log(myNums.reduce((accumulator, currentValue) => {

    console.log(accumulator, currentValue);
    return accumulator + currentValue

}, 0))

console.log(myNums.reduce((accumulator, currentValue) => (accumulator + currentValue), 0))


