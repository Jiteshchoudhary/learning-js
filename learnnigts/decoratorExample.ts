function Logger(target: Function) {
    console.log("target recvied here@@", target);
    console.log("logging is calling")
}
//to use decortor go to ts config and allowed experimentalDecorator to true
@Logger
class Greeter {
    constructor() {
        console.log("User class constructor is called..")
    }
    // @UppercaseFirstArg
    // greet(name: string): string {
    //     return `Hello, ${name}!`;
    // }
}

// Usage
const greeter = new Greeter();
console.log(); // Output: "Hello, JOHN DOE!"
