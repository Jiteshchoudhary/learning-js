const fetchUserData = async (userId) => {
    // Simulate an asynchronous operation, e.g., fetching user data
    console.log("userId is comming", userId, new Date())
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`User data for ID: ${userId}`);
        }, 3000); // Simulate a delay
    });
};

function fetchUsersWithForEach() {
    const userIds = [1, 2, 3]; // Example array of user IDs
    console.log("it is started normally")
    userIds.forEach(async (id) => {
        const userData = await fetchUserData(id); // Asynchronous operation
        console.log(userData); // Logs user data
    });

    console.log('All requests sent!'); // Executes immediately after forEach
}
async function fetchUsersWithForLoop() {
    const userIds = [1, 2, 3]; // Example array of user IDs
    console.log("it is started normally");
    for (let i = 0; i < userIds.length; i++) {
        const userData = await fetchUserData(userIds[i]);
        console.log(userData); // Logs user data
    }

    console.log('All requests sent!'); // Executes immediately after forEach
}

// fetchUsersWithForEach();
fetchUsersWithForLoop();

