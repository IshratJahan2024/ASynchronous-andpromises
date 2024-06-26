// Q No1:- Write a simple asynchronous TypeScript function fetchGreeting that returns a
//greeting message after a 2-second delay using setTimeout.
async function fetchGreeting() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello Ishrat");
        }, 2000);
    });
}
fetchGreeting().then((greeting) => {
    console.log(greeting);
});
// Q No2:- Write a function simulateTask that simulates a task by logging "Task started",
//waits for 1 second, and then logs "Task completed". Use setTimeout for the delay.
function simulateTask() {
    console.log("Task started");
    setTimeout(() => {
        console.log("Task completed");
    }, 1000);
}
simulateTask();
// Q No3:- Write a function fetchData that returns a Promise which resolves with the string
// "Data fetched successfully!" after a delay of 1 second. 
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 1000);
    });
}
fetchData().then((message) => {
    console.log(message);
});
// Q No4:- Write a function fetchWithError that returns a Promise. It should randomly either
// resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a
// delay of 1 second. Handle the rejection using .catch
function fetchWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Randomly decide to resolve or reject the promise
            const isSuccess = Math.random() > 0.5;
            if (isSuccess) {
                resolve("Data fetched successfully!");
            }
            else {
                reject("Data fetch failed!");
            }
        }, 1000);
    });
}
fetchWithError()
    .then((message) => {
    console.log(message);
})
    .catch((error) => {
    console.error(error);
});
// Q No5:- Write a function executeSequentially that executes two functions fetchData and
// processData sequentially using Promises, and logs the results in the order they are
// called.
async function fetchdata() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 1000);
    });
}
function processData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data processed successfully!");
        }, 1000);
    });
}
function executeSequentially() {
    fetchData()
        .then((fetchResult) => {
        console.log(fetchResult);
        return processData();
    })
        .then((processResult) => {
        console.log(processResult);
    })
        .catch((error) => {
        console.error(error);
    });
}
executeSequentially();
export {};
