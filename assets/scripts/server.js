console.log('Server is running!');

/** Global Variables */
let data = null;

function runServer() {
    // Mock Fetching Data

    setTimeout(() => {
        data = DATABASE
    }, 500)

}


runServer();