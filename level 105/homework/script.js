
const colors = ["red", "green", "blue"];
const [firstColor, secondColor] = colors;
console.log(firstColor, secondColor); 


const user = {
  name: "Giorgi",
  age: 25,
  country: "Georgia"
};
const { name, country } = user;
console.log(name, country);


const person = {
  name: "Nino",
  age: 28
};
const { country: personCountry = "Unknown" } = person;
console.log(personCountry);

const printUser = ({ name, age }) => {
  console.log(`${name} is ${age} years old`);
};
printUser({ name: "Saba", age: 22 }); 


const numbers = [10, 20, 30, 40, 50];
const [first, ...rest] = numbers;
console.log(first); 
console.log(rest); 


const student = {
  name: "Luka",
  marks: {
    math: 90,
    physics: 85
  }
};
const { marks: { math, physics } } = student;
console.log(math, physics); 