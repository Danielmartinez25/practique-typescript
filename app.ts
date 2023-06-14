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
console.log(employeeStatus);
