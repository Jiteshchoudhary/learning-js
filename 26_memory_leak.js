function createMemoryLeak() {
    const largeArray = new Array(1e6).fill('This is a large array to consume memory');

    // Inner function that keeps a reference to largeArray
    function innerFunction() {
        console.log(largeArray[0]);
    }

    // Returning the inner function
    return innerFunction;
}

// Create a memory leak
let leakyFunction = createMemoryLeak();

// Call the leaky function
setInterval(() => {
    leakyFunction(); // This keeps the largeArray in memory
}, 1000);

// Function to log memory usage
function logMemoryUsage() {
    const memoryUsage = process.memoryUsage();
    console.log(`Memory Usage:`);
    console.log(`  RSS: ${(memoryUsage.rss / 1024 / 1024).toFixed(2)} MB`);
    console.log(`  Heap Total: ${(memoryUsage.heapTotal / 1024 / 1024).toFixed(2)} MB`);
    console.log(`  Heap Used: ${(memoryUsage.heapUsed / 1024 / 1024).toFixed(2)} MB`);
    console.log(`  External: ${(memoryUsage.external / 1024 / 1024).toFixed(2)} MB`);
}

// Monitor memory usage every second
setInterval(logMemoryUsage, 1000);

// Cleanup after a certain time
// setTimeout(() => {
//     // To avoid memory leak, we can nullify the leaky function reference
//     leakyFunction = null; // This will help in cleaning up the memory
// }, 10000); // Cleanup after 10 seconds
