class User {
    email: string
    name: string
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
    }
}

const alvin = new User('alvin@dev.co', 'alvin')