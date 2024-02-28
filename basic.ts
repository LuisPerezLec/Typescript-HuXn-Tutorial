// Annotations
// let myVar: type = value;

// Strings
let myName: string = "Luis";
console.log(myName);

// Numbers
let favNumber: number = 7;
console.log(favNumber);

// Boolean
let amIAwake: boolean = true;
console.log(amIAwake);

// Inference
let language = "TypeScript";
let experience = true;
let lada = 449;
console.log(typeof language)

// Any Type
// let color: any = "green"; // Do not use any, if posible

// Function Parameters annotations
function addition( x: number, y: number) {
    return x + y;
}

let vacio:void; //Why is this legal?
console.log(vacio)

let TsIsReallyWeird: never; // Stop Ts, you are hurting me
//console.log(TSIsReallyWeird); //Uhhh? This does not work

function greet (person = "Anonymous"): string {
    return `Hello ${person}`;
}

const res = greet(/* 2 //gives error because the person type is inferred to string */);
console.log(res);

function printMessage (message: string): void {
    console.log (`This is my ${message}`);
}

printMessage("Hello TypeScript");

function throwError(msg: string): never{ //Use cases of never
    throw new Error(msg);
    //while (true) {}
}

// Arrays
// Are data typed and can only contain items of the same data type
const numeros: number[] = [1]
// const names: Array<string> = ["Luis", "Silva", "Pablo"]; This declaration is old fashioned

const nums: number[] = [1,2,4,6];
const str: string[] = ["one", "two", "three"];
const items: string[] = [];
items.push('Keyboard')
console.log(nums);
console.log(str);
console.log(items);

// Multi Dimensional arrays || Matrix
const matrix: number[][] = [
    [1, 2],
    [3, 4],
];