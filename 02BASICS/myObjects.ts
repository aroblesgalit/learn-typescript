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

type User = {
    name: string;
    email: string;
    isActive: boolean;
}

function createUser(user: User): User {
    return {
        name: user.name,
        email: user.email,
        isActive: user.isActive
    }
}

createUser({ name: '', email: '', isActive: true })

export {}