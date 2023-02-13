class User {
    email: string
    name: string
    readonly city: string = 'San Diego'
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
    }
}

const alvin = new User('alvin@dev.co', 'alvin')
// alvin.city = 'San Diego'