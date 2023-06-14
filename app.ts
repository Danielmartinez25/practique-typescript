const integer: number = 6;
const hexadecimal: number = 0xf00d;
const binary: number = 0b1010;
const octal: number = 0o744;
const str : string = "FFFF";
const bool = true;
const daniel = 'true';
/* Type Boolean */
let boolean = true
let booleanFalse = false
/*  Type Number */
let x: number;
let y = 0;
let z: number = 123.456;
let big: bigint = 100n;
/* Type String */
let s: string;
let empty = "";
let abc = 'abc';
/* use of `` */
let firstName: string = "Mateo";
let sentence: string = `My name is ${firstName}.I am new to TypeScript.`;
console.log(sentence);
/* Enum */
enum ContractStatus {
    Permanent = 1,
    Temp,
    Apprentice
}

let employeeStatus: ContractStatus = ContractStatus.Temp;
console.log(employeeStatus) 

/* Any type */

let randomValue: any = 10;
randomValue = 'Mateo';   // OK
randomValue = true;      // OK

/* Unknow */

let randomValues: unknown = 10;
randomValues = true;
randomValues = 'Mateo';

/*
console.log(randomValues.name);  // Error: Object is of type unknown
randomValues();                  // Error: Object is of type unknown
randomValues.toUpperCase();      // Error: Object is of type unknown 
*/

/* 
La principal diferencia entre anyy unknownes que no puede interactuar con una variable de tipo unknown; hacerlo genera un error de compilación . anyomite cualquier verificación en tiempo de compilación y el objeto se evalúa en tiempo de ejecución; si el método o la propiedad existe, se comportará como se esperaba.
*/
/* tipos de acercion */

let randomValue1: unknown = 10;

randomValue1 = true;
randomValue1 = 'Mateo';

if (typeof randomValue1 === "string") {
    console.log((randomValue1 as string).toUpperCase());    //* Returns MATEO to the console.
} else {
    console.log("Error - A string was expected here.");    //* Returns an error message.
}
/* Union types */

let multiType: number | boolean;
multiType = 20;         //* Valid
multiType = true;       //* Valid
multiType = "twenty";   //* Invalid

/* Generics */
function Generics<T>(n : T ) {
    if(typeof n === "number"){
        return n + 2
    }else if(typeof n === "string"){
        return `Hola ${n}`
    }else{
        return console.log(`el tipo del dato es ${typeof n}`);
        
    }
}

/*
type of implement 

string =>	typeof s === "string"
number =>	typeof n === "number"
boolean =>	typeof b === "boolean"
undefined =>	typeof undefined === "undefined"
function =>	typeof f === "function"
array =>	Array.isArray(a)
*/