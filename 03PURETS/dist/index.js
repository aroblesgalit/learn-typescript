"use strict";
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
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.city = 'San Diego';
    }
}
const alvin = new User('alvin@dev.co', 'alvin');
// alvin.name
