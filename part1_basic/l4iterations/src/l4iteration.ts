// => for

for (let x: number = 0; x < 10; x++) console.log(x);

let numarrs: number[] = [10, 20, 30, 40, 50, 60, 70,];
for (let y: number = 0; y < numarrs.length; y++) console.log(numarrs[y]);

let mixarrs: (string | number)[] = ["red", "green", 20, 50, 38, "tomato", 60];

for (let p: number = 0; p < mixarrs.length; p++) {
    console.log(mixarrs[p]);
}

// => for of ( value of array)
for(let mix of mixarrs) console.log(mix);

for(let mix of mixarrs.entries()) console.log(mix);

for(let [key , value] of mixarrs.entries()) console.log(key, value);

// => for in (index in array)
for(let key in mixarrs) console.log(mixarrs[key]);

for(let key in mixarrs){
    // console.log(typeof key); //string
    // console.log(+key);

    console.log(`${+key + 1}. ${mixarrs[key]}`);
}