function User (username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn
    I
    this.greeting = function(){
    console.log(`Welcome ${this.username}"`);
    return this;
    }
}

const userOne = User("a", 9, true)
const userTwo = User("b", 9, false)

// doesn't create new instances

const userThree = new User("a", 9, true)
const userTwoo = new User("b", 9, false)