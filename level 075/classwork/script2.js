let info = {

    naame(){
        console.log("wercome ", info.name)
    }
}

let hisname = prompt("Enter your name")
let hislastname = prompt("Enter your lastname")
let hisage = prompt("Enter your age")
let hishobbie = prompt("Enter your hobbie")

info.name = hisname
info.lastname = hislastname
info.age = hisage
info.hobbie = hishobbie



console.log(Object.keys(info))
console.log(Object.values(info))

for(let i in info){
    console.log(Object.key(info[i]))
}