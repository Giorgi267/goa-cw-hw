let name = prompt('What is your name?');
let lastname = prompt('What is your last name?');

let users = [[name, lastname]];
let initials = [];

for (let i = 0; i < users.length; i++) {
    let user1 = users[i][0][0];
    let user2 = users[i][1][0];
    initials.push(user1 + '.' + user2);
}

console.log(initials)