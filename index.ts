//Objects in Ts
//type VarName (annotation/types) = {property:value}
const person: { firstName: string; lastname: string; age: number } = {
    firstName: "John", //Who's this guy???
    lastname: "Doe", //He's almost on every programation tutorial
    age: 30
}

function printUser(): {name: string; age: number, location: string } {
    return {
        name: "Luis",
        age: 21,
        location: "Mex"
    }
}

const Luis = printUser();
console.log(Luis);

// Type Aliases
type Agent = {
    name: string,
    ultimate: number,
    location: string,
    partnersname?: string,
    readonly lifehp: number //Only assignable at the declaration of the object
}

const printAgentInfo = (agent: Agent) => {
    return `Name: (${agent.name}) Ultimate points: (${agent.ultimate}) Location (${agent.location})`;
}

const agent1 = printAgentInfo({name: "Viper", ultimate: 8, location: "America", lifehp: 100});
console.log(agent1);

// Intersection types
type Person = {
    name: string;
    age: number;
}

type Employee = {
    id: number;
    title: string;
}

type PersonAndEmployee = Person & Employee;

const alice: PersonAndEmployee = {
    name: "Alice",
    age: 21,
    id: 123,
    title: "developer"
}

console.log(`El tipo de dato de alice es ${typeof alice}`)
console.log(alice)

// Union types
type Morph = {
    imitationForm?: string,
    level : number,
    goldValue: number | boolean
}

const morphling: Morph = {
    level: 6,
    imitationForm: "Phantom Assasin",
    goldValue: true
}

let password : string | number;

type Admin = {
    email: string
    password: string | number
    level: number
}

type User  = {
    email: string
    password: string | number
}

let rotz: Admin | User = {
    email: "hector@rotz.com",
    password: 0o30102
    //level: 5 //Esto puede ir comentado o no
}


const manyItems: (number | string)[] = [4,4,9,"Hola"/* , false */];

// Literal types
let color : "red" | "blue" | "green";
let valorantEarth: "alpha" | "omega";
//valorantEarth = "beta"
valorantEarth = "alpha"

/* Tuples Array with a fixed number of arrays, the order of the types in the tuple definition corresponds to the
   the order of the values in the actual array. Tuples are similar to arrays, but thet have a specific structure. */
let myTuple: [string, number];
// myTuple = [7, "goodbye angels"]; //Wrong, not following the tuple structure
myTuple = ["hello", 7];
console.log(myTuple)
let [first, second] = myTuple;
console.log(`${first} to earth ${second}`);

const passwords: (number | string)[] = ["item 1", 12];
console.log(passwords);