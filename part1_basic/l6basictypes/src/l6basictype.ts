/**
 * Basic Types
 */


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Void Type (special type) +++++++++++++++++++++++++++++++++++++++++++++++++++++

let country: void;
// console.log(country); //undefined

let brandname: string = "";
let phone = (brand: string): void => {
    brandname = brand;
}

// console.log(phone("iPhone")); // undefined (because the function is void)
// console.log(brandname); // iPhone

let points: number;
function userpoints(cashdown: boolean): number {
    if (cashdown) {
        return points = 100;
    } else {
        return points = 0;
    }
}

let user1 = userpoints(true);
let user2 = userpoints(false);
// let user3 = userpoints(null); //strictNullChecks : false
//let user4 = userpoints(undefined) ; //strictNullChecks : false

// console.log(user1);
// console.log(user2);

//console.log(user3); //0
//console.log(user4); //0

let age1: undefined = undefined;
// let age2 : undefined = null;
// let age3 : undefined = 25;
// let age4 : undefined = "Hay";

let age5: undefined | null = null;
let age6: undefined | number = 25;
let age7: undefined | string = "Hay";

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Type Aliases +++++++++++++++++++++++++++++++++++++++++++++++++++++

let cashback: number = 1000;
cashback = 500;
// console.log(cashback);

type Promotion = number; // Note : this is not value! it's just type. (can call literal type)
let cashreturn: Promotion = 2000;
// console.log(cashreturn);

const price: 300 | 500 | 700 = 700;
// console.log(price);

type FixedPrice = 300 | 500 | 700; // Note : this is not value! it's just type. (can call literal type)
const itemprice: FixedPrice = 500;
// console.log(itemprice);

type DLTClassType = "zoom" | "vdo";
const newcourse: DLTClassType = "vdo";
// console.log(newcourse);

type PersonInfo = {
    name: string,
    gender: string,
    age: number
}

const student: PersonInfo = {
    name: "Aung Aung",
    gender: "male",
    age: 25
}

// student.hascar = false; //error

// console.log(student);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Recursive Type +++++++++++++++++++++++++++++++++++++++++++++++++

type NestedArray = number | NestedArray[];

// let numberarrs: NestedArray = 10;
let numberarrs: NestedArray = [10, 20, [30, 40, [100, 300]]]
// console.log(numberarrs);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Type Assertions +++++++++++++++++++++++++++++++++++++++++++++++++

type Employee = {
    id: number,
    name: string,
    department: string
};

const officestaff: Employee = {
    id: 1001,
    name: "Yu Yu",
    department: "Accounting"
};

// console.log(officestaff);
// console.log(typeof officestaff);

const newstaff = JSON.stringify(officestaff);
// console.log(newstaff);
// console.info(typeof newstaff); // string

function staffinfo(newstaffjson: string): Employee {
    // return JSON.parse(newstaffjson);

    // Old Method
    return (<Employee>JSON.parse(newstaffjson));

    // New Method
    return (JSON.parse(newstaffjson) as Employee);
}

// console.log(staffinfo(newstaff));
// console.log(staffinfo(newstaff).id, staffinfo(newstaff).name, staffinfo(newstaff).department);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Union Type +++++++++++++++++++++++++++++++++++++++++++++++++

let luckynumber: number | string = "777";
// console.log(luckynumber);

// => Union Type in functions
function userinfo(name: string, age: number | string) {
    console.log(`My name is ${name}. I am ${age} years old.`);
}

// userinfo("Tun Tun", "20");

// Type Guards
function getinput(val: string | number) {
    if (typeof val === "string") {
        return val.toUpperCase();
    } else {
        return val * 2;
    }
}

// console.log(getinput("Hello"));
// console.log(getinput(20));

let dinner = (amount: number, servicefee: string | number): number => {

    if (typeof servicefee === "number") {
        return amount + servicefee;
    } else {
        return amount + parseInt(servicefee);
    }
}

// console.log(dinner(30000, 5000));

let lunch = (amount: number, servicefee: string | 100 | 300 | 500): number => {

    if (typeof servicefee === "number") {
        return amount + servicefee;
    } else {
        return amount + parseInt(servicefee);
    }

};

// console.log(lunch(3000, 500)); // 3500
// console.log(lunch(3000, "200")); //3200
// console.log(lunch(3000, "100 usd")); //3100
// console.log(lunch(3000,"usd 50")); // NaN
// console.error(lunch(3000, 200));

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Object Type +++++++++++++++++++++++++++++++++++++++++++++++++

type ComputerUnit = {
    readonly brandname: string,
    price: number,
    cpu?: string,
    coolingfun: boolean,
};

const desktop: ComputerUnit = {
    brandname: "MSI",
    price: 800,
    cpu: "Intel Core I9",
    coolingfun: false,
};

// console.log(desktop);

const laptop: ComputerUnit = {
    brandname: "HP",
    price: 600,
    cpu: "Intel Core I7",
    coolingfun: false,
};

// console.log(laptop);

// -----------------------------------overrite object property
laptop.price = 650;
// console.log(laptop);


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Intersection Type
//exe 1

type Person = {
    name: string;
    age: number;
};

type Staff = {
    uid: number;
    department: string;
}

type StaffPerson = Person & Staff;

const newperson: StaffPerson = {
    uid: 1001,
    name: "Manung Maung",
    age: 30,
    department: "IT",

};

// console.log(newperson);

//exe 2 (intersection types with function)
function printpersoninfo(obj: StaffPerson) {
    console.log(`ID is ${obj.uid}, Name is ${obj.name}, Age is ${obj.age}, Department is ${obj.department}`);
}

// printpersoninfo(newperson);

//exe 3 
type Article = {
    id: number,
    title: string;
    price: number;
    type: string;
}

type ArticleDescription = {
    content(): void
}

type ArticleVdoRecord = {
    cloudprovider(): void
}

type ArticlePayment = {
    paymentgateway(): void
}

type NewArticle = Article & ArticleDescription
    & ArticleVdoRecord & ArticlePayment;

const nextjsclass: NewArticle = {
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
}

// console.log(nextjsclass);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Function Type

//exe 1 (Default Parameter)
function greet(name: string, age: number = 18) {
    return `Hello, my name is ${name} and I am ${age} years old`;
}

// console.log(greet("Mya Mya"));


// exe2 Optional Parameter (?)
function greeting(name: string, age?: number): string {
    if (age !== undefined) {
        return `Hello, my name is ${name} and I am ${age} years old`;
    }
    return `Hello, my name is ${name}`;
}

// console.log(greeting("Nyi Nyi"));


// exe3 (i)
let sayhi: Function;
sayhi = (msg: string): string => {
    return msg;
}

// console.log(sayhi("Mingalar Par"));

// exe3 (ii)

let sayhello: (msg: string, name?: string, content?: string) => string;

sayhello = (msg, name, content = "What sare your doign") => {
    return `Hello ${msg}!, ${name}. ${content}`;
}

// console.log(sayhello("Min Ga Lar Par","Myar","How are you"));

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Nested Object Type

type Address = {
    street : string;
    city:string;
    country:string;
};

type Customer = {
    name:string;
    phone : string;
    address : Address; // Nested object type
}

const vipcu:Customer = {
    name : "U Hla",
    phone : "09123456789",
    address : {
        street : "123 main street",
        city : "Mandalay",
        country : "Myanmar",
    }
}

// console.log(vipcu);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Literal Object Type

function employer(owner:{fullname:string}):string{
    return owner.fullname;
}

// console.log(employer({fullname:"Mon Mon"}));


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Literal Object Type(Destructing)

function lawyer({fullname} : {fullname:string}):string{
    return fullname;
}

// console.log(lawyer({fullname:"U Ba"}));


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ typeof "in typescript Typequery"

// console.log(typeof "Hello");
// console.log(typeof 1500);

const Animal = {
    name: "Panda",
    age : 7
}

type Pet = typeof Animal;

let petone:Pet = {
    age : 10,
    name : "Cute Cat",
};

// console.log(petone);


