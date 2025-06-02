<<<<<<< HEAD
let num = prompt("Enter a number");
num = parseInt(num);

let i = 1;
while (i <= num) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + " is divisible by both 3 and 5");
    } else if (i % 3 === 0) {
        console.log(i + " is divisible by 3");
    } else if (i % 5 === 0) {
        console.log(i + " is divisible by 5");
    }
    i++;
=======
// მომხმარებელს შემოატანინეთ რიცხვი შემდეგ დაატრიალეთ ერთიდან ამ რიცხვამდე ციკლი, while ის დახმარებით და დაბეჭდეთ მხოლოდ 1 დან მომხმარებლის შემოტანილ რიცხვამდე 3ისჯერადი და 5ის ჯერადი რიცხვი, ისეთი რიცხვები რომლებიც სამის ჯერადიც არის და ხუთის ჯერადიც


let num = prompt("enter a number")
num = parseInt(num)

let i = 1
while (i > num){
    if (i % 3 == 0 && i % 5 == 0){
        console.log(i)
    }else if(i % 3 == 0){
        console.log(i)
    }else if(i % 5 == 0){
        console.log(i)
    }else{
        console.log("no number")
    }
    i++
}

// მომხმარებელს შემოატანინეთ რიცხვი, შემდეგ შემოატანინეთ არჩევანი(ერთიდან მომხმარებლის რიცხვამდე დაბეჭდოს ლუწი, კენტი, კვადრატი ან 3 ის ჯერადი რიცხვი

let num1 = prompt("enter a number")
num1 = parseInt(num1)
let dec = prompt("enter a decision")
let o = 1
while( o < num1){
    if(dec == "even" && o % 2 == 0){
        console.log(o)
    }else if(dec == "odd" && o % 2 == 1){
        console.log(o)
    }else if(dec == "square"){
        console.log(o ** 2)
    }else if(dec == "multiple of 3" && o % 3 == 0){
        console.log(o)
    }else{
        console.log("there is no number")
    }
    o ++
>>>>>>> 889ffeb514c2dab5b6d022f2ab74bee0d45b0e50
}