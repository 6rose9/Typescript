// functions
function city(name) {
    return "".concat(name, " is a beautiful city.");
}
city("Myawlamyine");
function cal(num1, num2) {
    return num1 + num2;
}
console.log(cal(20, 60));
function car(brand, qty, tax) {
    var price = 0;
    if (brand == "toyota")
        price = 3000;
    if (brand == "mazda")
        price = 2000;
    if (brand == "suzuki")
        price = 1000;
    var total = (price * qty) + tax;
    return total;
}
console.log(car("toyota", 1, 100));
console.log(car("suzuki", 2, 50));
var truck = function (brand, qty, tax) {
    var price = 0;
    if (brand == "toyota")
        price = 3000;
    if (brand == "mazda")
        price = 2000;
    if (brand == "suzuki")
        price = 1000;
    var total = (price * qty) + tax;
    return total;
};
console.log(truck("toyota", 1, 100));
console.log(truck("suzuki", 2, 50));
