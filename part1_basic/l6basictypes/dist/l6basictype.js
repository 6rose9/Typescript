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
const desktop = {
    brandname: "MSI",
    price: 800,
    cpu: "Intel Core I9",
    coolingfun: false,
};
const laptop = {
    brandname: "HP",
    price: 600,
    cpu: "Intel Core I7",
    coolingfun: false,
};
laptop.price = 650;
const newperson = {
    uid: 1001,
    name: "Manung Maung",
    age: 30,
    department: "IT",
};
function printpersoninfo(obj) {
    console.log(`ID is ${obj.uid}, Name is ${obj.name}, Age is ${obj.age}, Department is ${obj.department}`);
}
const nextjsclass = {
    id: 1002,
    title: "Nextjs Batch1",
    price: 800000,
    type: "Zoom Class",
    content() {
    },
    cloudprovider() {
    },
    paymentgateway() {
    }
};
function greet(name, age = 18) {
    return `Hello, my name is ${name} and I am ${age} years old`;
}
function greeting(name, age) {
    if (age !== undefined) {
        return `Hello, my name is ${name} and I am ${age} years old`;
    }
    return `Hello, my name is ${name}`;
}
let sayhi;
sayhi = (msg) => {
    return msg;
};
let sayhello;
sayhello = (msg, name, content = "What sare your doign") => {
    return `Hello ${msg}!, ${name}. ${content}`;
};
const vipcu = {
    name: "U Hla",
    phone: "09123456789",
    address: {
        street: "123 main street",
        city: "Mandalay",
        country: "Myanmar",
    }
};
function employer(owner) {
    return owner.fullname;
}
function lawyer({ fullname }) {
    return fullname;
}
const Animal = {
    name: "Panda",
    age: 7
};
let petone = {
    age: 10,
    name: "Cute Cat",
};
