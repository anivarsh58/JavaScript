class User
{
    constructor(username)
    {
        this.username = username
    }

    encryptPassword()
    {
        return `${this.password}abc`
    }
    
}

class Teacher extends User
{
    constructor(username, password, email)
    {
        super(username);
        this.password = password
        this.email = email

    }
}