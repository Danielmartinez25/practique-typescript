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

console.log(randomValues.name);  // Error: Object is of type unknown
randomValues();                  // Error: Object is of type unknown
randomValues.toUpperCase();      // Error: Object is of type unknown


/* 
La principal diferencia entre anyy unknownes que no puede interactuar con una variable de tipo unknown; hacerlo genera un error de compilación . anyomite cualquier verificación en tiempo de compilación y el objeto se evalúa en tiempo de ejecución; si el método o la propiedad existe, se comportará como se esperaba.
*/