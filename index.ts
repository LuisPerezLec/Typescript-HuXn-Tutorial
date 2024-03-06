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

// Object Oriented Programming
/* Class Properties Annotations
 * To annotate class properties with a type. 
 */

class PersonClass {
    readonly name: string;
    readonly age: number;

    constructor( name: string, age: number ) {
        this.name = name;
        this.age = age;
    }
}

const classDeclaredPerson = new PersonClass("John", 20);
console.log(classDeclaredPerson);

/* Access Modifiers
 * Control the visibility of class members
 * Public -> Can be accessed from anywhere
 * Private -> Can only be accessed from within the class they are defined in
 * Protected -> Can be accessed from within the class they are defined in, as well as any subclasses that extend the class
*/

class Pet {
    public name: string;
    public age: number;
    private owner: string;
    protected race?: string; 
    constructor(name: string, age: number, owner: string) {
        this.name = name;
        this.age = age;
        this.owner = owner;
    }

    getOWner(): string {
        return `The owner of ${this.name} is ${this.owner}`
    }
}

class Dog extends Pet {
    constructor (name: string, age: number, owner: string, race: string) {
        super(name, age, owner);
        this.race = race;
    }
}

let dog = new Pet("Sova", 1, "Luis");
console.log(dog.name);
//console.log(dog.owner); //La propiedad 'owner' es privada y solo se puede acceder a ella en la clase 'Pet'.ts(2341)
console.log(dog.getOWner());

let dog2 = new Dog("Blue", 12, "Ariel", "Beagle");
console.log(dog2);

/* Getters & Setters
 * Used to access and modify class properties. Getters and setters allow us to define
 * a property in a class that looks like a simple variable from the outside but internally has
 * additional logic for getting and setting the value
*/

class Computer {
    private _macDirection: number = 0o212;

    get macDirection() : number {
        return this._macDirection;
    }
    set macDirection(value: number) {
        this._macDirection = value;
    }
}
const hp = new Computer();
console.log(`Current Value: ${hp.macDirection}`);
hp.macDirection = 449;
console.log(`Current Value: ${hp.macDirection}`);

/* Interfaces
 * Is a way to define a contract for the shape of an object.
 * It specifies the properties and its types that them must have.
 * Interfaces are a powerful tool for enforcing a certain structure.
*/

interface Motorcycle {
    brand: string;
    model: string;
    hp: number;
    tankCapacity: number | null;
    accelerate(): void;
}

const motorcycle1: Motorcycle = {
    brand: "Yamaha",
    hp: 41,
    model: "YBR R3",
    tankCapacity: 14,
    accelerate() {
        console.log(`${this.brand} is accelerating`)
    }
}

motorcycle1.accelerate();

// Interfaces for functions
interface MathOperation {
    (x: number, y: number): number;
}

const addition2: MathOperation = (a, b) => a + b;
const substraction: MathOperation = (a, b) => a - b;

console.log(addition2(12,2));
console.log(substraction(17,3));

// Interfaces for classes
interface Vehicle {
    start(): void;
    stop(): void; // Methods can also be optional as stop?()
    readonly model: string;
}

class Car implements Vehicle {
    model: string; // Even when the Vehicle interface defines the model property, the class needs to declare it.
    constructor(model:string) {
        this.model = model;
    }
    start() {
        console.log(`Car ${this.model} started`);
    }
    stop() {
        console.log("Car stopped");
    }
}

const car1 = new Car("Jetta 2006");
car1.start();

interface Song {
    songName: string;
    singerName: string;
    printSongInfo(listener: string): string;
}

const songs: Song[] = []; //Array of items with Song interface

const song1: Song = {
    songName: "HONEY",
    singerName: "David Damiano",
    printSongInfo (listener) {
        return `${listener} is listening to ${this.songName} - ${this.singerName}`
    }
}

console.log(song1.printSongInfo("Luis"));

interface MovieDetails {
    readonly name: string;
    ratings: number;
    printMovieInfo( name: string, price: number, ratings: number): string | number;
}

interface MovieGenra extends MovieDetails {
    genra: string;
}

const movie1: MovieGenra = {
    name: "Real Steel",
    genra: "Action Sci-Fi",
    ratings: 9.9,
    printMovieInfo (
        name: string,
        price: number,
        ratings: number
        ): string | number { // The tutorial does this, i find it redundant and stupid, but, anyways
            return `Movie name: ${name} Price: ${price} Ratings: ${ratings}`
    }
}

const res1 = movie1.printMovieInfo(`Real Steel`, 90, 99);
console.log(res1);

/* Declaration merging
 * Once an interface is declared, it cannote be directly modified
 * Declaration merging refer to the ability to extend or uagment an
 * existing declaration, including interfaces.
 */
// Original interface
interface Building {
    floors: number;
    build(): void;
}

// Declaration merging (interface extension)
interface Building {
    material: string;
    demolish(): void;
}

const empireState: Building = {
    floors:  50,
    material: "Block",
    build() {
        console.log(`Building the ${this.floors} floors`)
    },
    demolish() {
        console.log(`Demoloshing the ${this.floors} floors`)
    },
}

empireState.build();