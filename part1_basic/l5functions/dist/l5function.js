"use strict";
function city(name) {
    return `${name} is a beautiful city.`;
}
city("Myawlamyine");
function cal(num1, num2) {
    return num1 + num2;
}
console.log(cal(20, 60));
function car(brand, qty, tax) {
    let price = 0;
    if (brand == "toyota")
        price = 3000;
    if (brand == "mazda")
        price = 2000;
    if (brand == "suzuki")
        price = 1000;
    let total = (price * qty) + tax;
    return total;
}
console.log(car("toyota", 1, 100));
console.log(car("suzuki", 2, 50));
let truck = (brand, qty, tax, discount) => {
    let price = 0;
    if (brand == "toyota")
        price = 3000;
    if (brand == "mazda")
        price = 2000;
    if (brand == "suzuki")
        price = 1000;
    let total = (price * qty) + tax - discount;
    return total;
};
console.log(truck("toyota", 1, 100, 0));
console.log(truck("suzuki", 2, 50, 100));
