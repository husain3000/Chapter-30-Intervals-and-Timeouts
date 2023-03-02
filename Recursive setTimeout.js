function repeatingFunc() {
 console.log("It's been 1 seconds. Execute the function again.");
 setTimeout(repeatingFunc, 1000);
}
setTimeout(repeatingFunc, 1000);