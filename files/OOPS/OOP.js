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
