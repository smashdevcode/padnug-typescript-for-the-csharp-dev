"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
const person = {
    firstName: 'Gandalf',
    age: 2019,
    email: 'graywizard1@hotmail.com'
};
const { firstName } = person, other = __rest(person, ["firstName"]);
// const firstName: string
// const other: {
//   age: number;
//   email: string;
// }
const newPerson = Object.assign({ firstName }, other);
// const newPerson: {
//   age: number;
//   email: string;
//   firstName: string;
// }
