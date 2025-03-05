"use strict";
let country;
let brandname = "";
let phone = (brand) => {
    brandname = brand;
};
let points;
function userpoints(cashdown) {
    if (cashdown) {
        return points = 100;
    }
    else {
        return points = 0;
    }
}
let user1 = userpoints(true);
let user2 = userpoints(false);
let age1 = undefined;
let age5 = null;
let age6 = 25;
let age7 = "Hay";
let cashback = 1000;
cashback = 500;
let cashreturn = 2000;
const price = 700;
const itemprice = 500;
const newcourse = "vdo";
const student = {
    name: "Aung Aung",
    gender: "male",
    age: 25
};
let numberarrs = [10, 20, [30, 40, [100, 300]]];
const officestaff = {
    id: 1001,
    name: "Yu Yu",
    department: "Accounting"
};
const newstaff = JSON.stringify(officestaff);
function staffinfo(newstaffjson) {
    return JSON.parse(newstaffjson);
    return JSON.parse(newstaffjson);
}
let luckynumber = "777";
function userinfo(name, age) {
    console.log(`My name is ${name}. I am ${age} years old.`);
}
function getinput(val) {
    if (typeof val === "string") {
        return val.toUpperCase();
    }
    else {
        return val * 2;
    }
}
let dinner = (amount, servicefee) => {
    if (typeof servicefee === "number") {
        return amount + servicefee;
    }
    else {
        return amount + parseInt(servicefee);
    }
};
let lunch = (amount, servicefee) => {
    if (typeof servicefee === "number") {
        return amount + servicefee;
    }
    else {
        return amount + parseInt(servicefee);
    }
};
console.log(lunch(3000, 500));
console.log(lunch(3000, "200"));
console.log(lunch(3000, "100 usd"));
console.log(lunch(3000, "usd 50"));
