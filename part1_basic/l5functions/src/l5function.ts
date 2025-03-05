// functions

function city(name: string): string {
    return `${name} is a beautiful city.`;
}

city("Myawlamyine");

function cal(num1: number, num2: number): number {
    return num1 + num2;
}

console.log(cal(20, 60));

function car(brand: string, qty: number, tax: number): number {

    let price: number = 0;

    if (brand == "toyota") price = 3000;
    if (brand == "mazda") price = 2000;
    if (brand == "suzuki") price = 1000;

    let total: number = (price * qty) + tax;
    return total;
}

console.log(car("toyota", 1, 100));
console.log(car("suzuki", 2, 50));

let truck = (
    brand: string,
    qty: number,
    tax: number,
    discount : number
): number => {
    let price: number = 0;

    if (brand == "toyota") price = 3000;
    if (brand == "mazda") price = 2000;
    if (brand == "suzuki") price = 1000;

    let total: number = (price * qty) + tax - discount;
    return total;
}

console.log(truck("toyota", 1, 100,0));
console.log(truck("suzuki", 2, 50,100));