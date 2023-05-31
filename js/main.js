

const age = 14
console.log(age)

let name = "Maria"
console.log(name)

const isStudent=true
console.log("isStudent:>>", isStudent)

let myString = "я люблю піцу" 
console.log(myString)

const myNumber = 14
const myNumb = myNumber + 10
console.log(myNumb)

const myNull = null
console.log(myNull)

const Name = prompt("Введіть своє ім'я");
console.log("Добрий день, ", Name);

const isComing = confirm("Натисніть ok або Cancel");
if (isComing == false) {
    console.log("Дію відхилено!")   
}
if (isComing == true) {
    console.log("Дякую за підтвердження!")
}

const danger = "Дія небезпечна, підтвердіть її або відхиліть!";
alert(danger)
const Message = confirm("Підтвердіть або відхиліть!");
if (Message == false) {
    console.log("Дію відхилено!")   
}
if (Message == true) {
    console.log("Дякую за підтвердження!")
}
