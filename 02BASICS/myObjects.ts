// const User = {
//     name: 'Alvin',
//     email: 'alvin@dev.co',
//     isActive: true
// }

// function createUser({ name: string, isPaid: boolean }) {}

// let newUser = { name: 'Alvin', isPaid: false, email: 'alvin@dev.co' }

// createUser(newUser)

// function createCourse():{name: string, price: number}{
//     return {name: 'reactjs', price: 399}
// }

// type User = {
//     name: string;
//     email: string;
//     isActive: boolean;
// }

// function createUser(user: User): User {
//     return {
//         name: user.name,
//         email: user.email,
//         isActive: user.isActive
//     }
// }

// createUser({ name: '', email: '', isActive: true })

type User = {
    readonly _id: string // Read-only
    name: string
    email: string
    isActive: boolean
    credcardDetails?: number // Optional
}

let myUser: User = {
    _id: '1245',
    name: 'Alvin',
    email: 'alvin@dev.co',
    isActive: false
}

myUser.email = 'alvin@gmail.com'
// myUser._id = '13532' // readonly - can't reassign

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}


export {}