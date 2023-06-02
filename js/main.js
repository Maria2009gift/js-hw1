

const age = 14
console.log(age)

// -----------------

const name = "Maria"
console.log(name)

// -----------------

const isStudent=true
console.log("isStudent:>>", isStudent)

// -----------------

const myString = "я люблю піцу" 
console.log(myString)

// -----------------

let myNumber = 14
myNumber = myNumber + 10
console.log(myNumber)

// -----------------

const myNull = null
console.log(myNull)

// -----------------

const myName = prompt("Введіть своє ім'я");
alert("Добрий день, ", myName);

// -----------------

const isComing = confirm("Натисніть ok або Cancel");
if (isComing === false) {
    console.log("Дію відхилено!")   
}
if (isComing === true) {
    console.log("Дякую за підтвердження!")
}

// -----------------

const danger = "Дія небезпечна, підтвердіть її або відхиліть!";
alert(danger)
const message = confirm("Підтвердіть або відхиліть!");
if (message === false) {
    alert("Дію відхилено!")   
}
if (message === true) {
    alert("Дякую за підтвердження!")
}
