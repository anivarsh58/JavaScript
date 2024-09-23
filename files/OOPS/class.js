class User
{
    constructor(username, passowrd, email)
    {
        this.username = username
        this.password = password
        this.email = email
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
        super(username, password, email);
        
    }
}