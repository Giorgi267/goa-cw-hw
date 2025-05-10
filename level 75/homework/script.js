let car = {
    company: "Toyota",
    model: "Corolla",
    milage: 50000,
    year: 2018,
    condition: "good",
    checkCondition(newCondition) {
        this.condition = newCondition;
        if (this.condition === "good" || this.condition === "bad") {
            console.log(`Car is in ${this.condition} condition`);
        } else {
            console.log("Condition is not recognized");
        }
    }
}

car.color = "Red";
car.price = 20000;

delete car.milage;