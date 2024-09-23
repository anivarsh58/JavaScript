function setUsername(username)
{
    // complex DB calls
    this.username = username;
}

function createUser(username, email, password)
{
    this.email = email;
    this.password = password;

    setUsername.call(this, username)
}