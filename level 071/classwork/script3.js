let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let sum = 0;

for (let i = 0; i < myArr.length; i++) {
    if (myArr[i] % 2 == 0) {
        sum += myArr[i] * myArr[i];
    }
}
console.log(sum)