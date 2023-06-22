/*  EXERCISE 1
    Too: Modify the code to add types to the variable declarations. 
    The resulting JavaScript should look the same as the original example when you're done. */

let firstName: string;
let lastName: string;
let fullName: string;
let age: number;
let ukCitizen: boolean;

firstName = 'Rebecca';
lastName = 'Smith';
age = 42;
ukCitizen = true;
fullName = firstName + " " + lastName;

if (ukCitizen) {
    console.log("My name is " + fullName + ", I'm " + age + ", and I'm a citizen of the United Kingdom.");
} else {
    console.log("My name is " + fullName + ", I'm " + age + ", and I'm not a citizen of the United Kingdom.");
}


/* EXERCISE 2
   too: Run the code as is and then modify it to have strongly typed variables. 
   Then, address any errors you find so that the result returned to a is 12. */

let d: number;
let j: number;
let a: number;

d = 5;
j = 7;
a = d + j;

console.log(a);


/* EXERCISE 3
   Too: In the following code, implement an enum type called Season that represents 
   the constants "Fall", "Winter", "Spring", and "Summer". Then, update the function so 
   you can pass in the season by referencing an item in the enum, for example 
   Season.Fall, instead of the literal string "Fall". */
enum season {
    Fall = "Fall",
    Winter = "Winter",
    Spring = "Spring",
    Summer = "Summer"

}

function whichMonths() {
    let monthsInSeason: string;
    switch (season) {
        case season.Fall:
            monthsInSeason = "September to November";
            break;
        case season.Winter:
            monthsInSeason = "December to February";
            break;
        case season.Spring:
            monthsInSeason = "March to May";
            break;
        case season.Summer:
            monthsInSeason = "June to August";
    }
    return monthsInSeason;
}

console.log(whichMonths("Fall"))