// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ regular array

let colorregarrs: string[] = ["red", "green", "blue"];

let numregarrs: number[] = [10, 20, 30];

let mixregarrs: (string | number | boolean)[] = [100, 200, 300, "red", "green", "blue"];

// nest string array
let neststringarray: string[][] = [["hello", "world"], ["zin", "zin"]];

// nest number array
let nestintarray: number[][] = [[30, 20, 50], [3, 35, 2,], []];

// nest mix array
let greetregarrs: (string | boolean | number)[][] = [["aung aung"], ["age", 28], ["active", true]];

// fixed value
const productdetails: [string, number] = ["Redbull", 2500];

type NestedArray = number | NestedArray[];

let numbersone: NestedArray = 4;

let numberstwo: NestedArray = [34, 54,];

let numberstheree: NestedArray = [34, 43, [34, 45, 35]];

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ generic array

let colorarrs: Array<string> = ["red", "green", "blue"];

let booleanarrs: Array<boolean> = [true, false, false, true];

let mixgenarrs: Array<string | number | boolean> = [200, 300, true, 3, "orange", false, 90];

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ nested generic array

// nest number array
let evengenarrs: Array<Array<number>> = [[30, 20, 50], [3, 35, 2,], []];

// nest mix array
let nestmixgenarrs: Array<Array<string | number | boolean>> = [["aung aung"], ["age", 28], ["active", true]];