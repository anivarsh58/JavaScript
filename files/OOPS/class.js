class User
{
    constructor(username)
    {
        this.username = username
    }

    // static keyword makes the function private

    static encryptPassword()
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