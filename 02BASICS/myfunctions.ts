function addTwo(num: number) {
    return num + 2
}

function getUpper(val: string) {
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

let myValue = addTwo(5)
getUpper('hello')
signUpUser('Alvin', 'alvin@co.dev', true)
loginUser('Alvin', 'alvin@co.dev')

export {}