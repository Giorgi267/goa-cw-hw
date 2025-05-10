let user = {
    name: "John",
    lastname: "Doe",
    age: 30,
    hobby: "reading"
};

for (let key in user) {
    if (user.hasOwnProperty(key)) {
        console.log(`${key} is ${user[key]}`);
    }
}