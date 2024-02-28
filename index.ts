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