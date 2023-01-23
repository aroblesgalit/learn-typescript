"use strict";
// const User = {
//     name: 'Alvin',
//     email: 'alvin@dev.co',
//     isActive: true
// }
exports.__esModule = true;
function createUser(user) {
    return {
        name: user.name,
        email: user.email,
        isActive: user.isActive
    };
}
createUser({ name: '', email: '', isActive: true });
