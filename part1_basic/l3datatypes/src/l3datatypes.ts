let fullname : string = "Su Su";
console.log(fullname);

let age:number = 25;
console.log(age);

let hascar:boolean = true;
console.log(hascar);

hascar = false;
console.log(hascar);

//Any Type

let studentid;

studentid = 1001;
studentid = "1002";

//Array of string
let colorsarrs:string[] = ["red","green","blue"];
console.log(colorsarrs);

//Array of number
let numarrs:number[] = [10,20,30,40,50];
console.log(numarrs);

//Array of string & number
let mixarrs1:(string|number)[] = [100,"red","green","blue",200,300];
console.log(mixarrs1);

//Array of string & number & boolean
let maxarrs2:(string|number|boolean)[] = [true, 100,"red",false];
console.log(maxarrs2);

// Nested array of number
let evenarrs:number[][] = [
    [3,4],
    [5,6,30,23],
    [0,6,3]
]
console.log(evenarrs);

// Nested array of string
let greetarrs : string [][] = [
    ["hi"],
    ["hello", "hay"],
    ["hifi', 'zoho"]
];
console.log(greetarrs);

let infoarrs:(string|number|boolean)[][] = [
    ["aung aung", 100],
    ["age", 28],
    ['hobby','sport','reading'],
    ['hascar',false]
];
console.log(infoarrs);

//Tuple (fixed value or fixed length)

const product:[string,number] = ["Redbull",2500];
console.log(product);

