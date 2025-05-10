let carinfo = {
    name : "bmw",
    model : "x5",
    year : 2020,
    color : "black",
    carfullinfo(){
        console.log(`car name is ${this.name}, model is ${this.model}, year is ${this.year}, color is ${this.color}`)
    }
}

console.log(carinfo.carfullinfo())