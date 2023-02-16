// class User {
//     public email: string
//     private name: string
//     readonly city: string = 'San Diego'
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name;
//     }
// }

class User {

    private _courseCount = 1

    readonly city: string = 'San Diego'
    constructor(
        public email: string, 
        public name: string,
        // private userId: string
        ){
    }

    private deleteToken() {
        console.log('Token deleted')
    }

    get getAppleEmail(): string {
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    set courseCount(courseNum) { // No return type
        if (courseNum <= 1) {
            throw new Error('Course count should be more than 1')
        } 
        this._courseCount = courseNum
    }
}

const alvin = new User('alvin@dev.co', 'alvin')
// alvin.name

// alvin.deleteToken()