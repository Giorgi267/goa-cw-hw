
// Rest ოპერატორი (...name) გამოიყენება ფუნქციის პარამეტრებში ან დესტრუქციაში,
// რათა შეაგროვოს ყველა დარჩენილი მნიშვნელობა ერთ მასივში ან ობიექტში.

// Spread ოპერატორი (...name) გამოიყენება მასივის ან ობიექტის დაშლისთვის,
// რათა მისი ელემენტები ჩასვათ სხვა მასივში ან ობიექტში.


const person = {
    name: "Nino",
    age: 28,
    height: 170
};
const { name, ...restelements } = person;
console.log(name);
console.log(restelements); 

const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = { c: 3 };
const merged = { ...obj1, ...obj2, ...obj3 };
console.log(merged);


function printNames(...names) {
    for (const name of names) {
        console.log(name);
    }
}
const namesArr = ["Giorgi", "Nino", "Luka"];
printNames(...namesArr);