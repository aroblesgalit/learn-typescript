"use strict";
exports.__esModule = true;
var User = {
    name: 'Alvin',
    email: 'alvin@dev.co',
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: 'Alvin', isPaid: false, email: 'alvin@dev.co' };
createUser(newUser);
function createCourse() {
    return { name: 'reactjs', price: 399 };
}
