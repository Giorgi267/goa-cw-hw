let num = prompt("Enter a number");
num = parseInt(num);

let choice = prompt("Choose an option: even, odd, square, multiple of 3");

let i = 1;
while (i <= num){
    if (choice === "even" && i % 2 === 0){
        console.log(i);
    }else if (choice === "odd" && i % 2 === 1){
        console.log(i);
    }else if (choice === "square" && i % 2 === 0){
        console.log(i * i);
    }else if (choice === "multiple of 3" && i % 3 === 0){
        console.log(i);
    }
    i++
}

