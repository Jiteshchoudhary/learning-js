//here var declaration is provide global and local scope
//inside the function it is consider as local and
//it is allow as same declaration
//declaration will remain on top but value is override
var name = "jitesh";
var name = "jitesh ji";
var name = "surname"
console.log(name); //jitesh ji

function name() {
    console.log("first name fn", name);
}

function name() {
    console.log("Second name fn", name);
}
console.log(name);
console.log(name());// this will through an error because var is already in global scope but as var not fn
console.log(name)