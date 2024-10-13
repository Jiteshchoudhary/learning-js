//callback function allow us to run js code into async ways
//and a function which take params as input 

function printer(result) {
    console.log(`Here are the output ${result}`)
}

function add(a, b, cb) {
    return cb(a + b);
}
add(6, 7, printer);
function heavyTask(callback) {
    setTimeout(() => {
        console.log("heavy task is running");
        callback();
    }, 2000);
}

function done() {
    console.log("done task");
}

heavyTask(done)
console.log("running other tasks");