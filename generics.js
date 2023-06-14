"use strict";
function generics(n) {
    if (typeof n === "number") {
        let sum = 10 + n;
        return sum;
    }
    else if (typeof n === "string") {
        let concat = `Hola ${n}`;
        return concat;
    }
    else {
        return `Soy un ${typeof n}`;
    }
}
generics(2);
