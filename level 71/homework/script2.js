// for-ციკლის გამოყენებით იპოვეთ სიაში ყველაზე დიდი და ყველაზე პატარა რიცხვები

let list = [1,3,4,4,5,6,7,8,1,3,5,7,4,3]
let max = list[0]

for(let i = 0; i < list.length; i++){
    if (list[i] > max){
        max = list[i]
    }
}
console.log(max)