"use strict";
for (let x = 0; x < 10; x++)
    console.log(x);
let numarrs = [10, 20, 30, 40, 50, 60, 70,];
for (let y = 0; y < numarrs.length; y++)
    console.log(numarrs[y]);
let mixarrs = ["red", "green", 20, 50, 38, "tomato", 60];
for (let p = 0; p < mixarrs.length; p++) {
    console.log(mixarrs[p]);
}
for (let mix of mixarrs)
    console.log(mix);
for (let mix of mixarrs.entries())
    console.log(mix);
for (let [key, value] of mixarrs.entries())
    console.log(key, value);
for (let key in mixarrs)
    console.log(mixarrs[key]);
for (let key in mixarrs) {
    console.log(`${+key + 1}. ${mixarrs[key]}`);
}
