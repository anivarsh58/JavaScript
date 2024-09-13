function calculateCartPrice(vall, val2, ...num1) {
    return num1
}
    console.log(calculateCartPrice(200, 400,
    500, 2000))


const chai = () => {
    let username = "Tanishq";
    console.log(this) // won't work in arrow functions
    console.log(this.username)
}

chai()

const addTwo = (num1, num2) => ({a : num1, b : num2})