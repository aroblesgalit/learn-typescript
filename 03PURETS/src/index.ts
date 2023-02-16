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
    readonly city: string = 'San Diego'
    constructor(
        public email: string, 
        public name: string,
        // private userId: string
        ){
    }
}

const alvin = new User('alvin@dev.co', 'alvin')
// alvin.name