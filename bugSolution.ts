function greeter(person: string) {
    return "Hello, " + person;
}

function greeterArray(person: string[]) {
    return person.map(name => `Hello, ${name}`).join(', ');
}

let user = ["Jane", "Doe"];
console.log(greeter(user[0])); // Correct usage with the first element of the array
console.log(greeterArray(user)); // Correct usage with the entire array