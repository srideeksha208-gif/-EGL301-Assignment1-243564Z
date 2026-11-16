
const queuecare = require("./SridharDeeksha_EGL301.js");

console.log("===== Funtion 1 Testing =====");

// Test 1: v1 joins Dragon Coaster
console.log("Test 1: Alex joins the queue");
console.log(queuecare.joinQueue("V001", "R001"));

// Test 2: v2 joins Dragon Coaster
console.log("Test 2: Sarah joins the queue");
console.log(queuecare.joinQueue("V002", "R001"));

// Test 3: v1 tries to join again
console.log("Test 3: Duplicate queue entry");
console.log(queuecare.joinQueue("V001", "R001"));

// Test 4: Visitor does not exist
console.log("Test 4: Invalid visitor");
console.log(queuecare.joinQueue("V999", "R001"));

// Test 5: Visitor tries to join a ride under maintenance
console.log("Test 5: Ride under maintenance");
console.log(queuecare.joinQueue("V003", "R003"));


console.log("===== Testing Function 2 =====");

// Check Alex's ticket
console.log("Test 6: Check Alex's queue status");
console.log(queuecare.getQueueStatus("Q1"));

// Check Sarah's ticket
console.log("Test 7: Check Sarah's queue status");
console.log(queuecare.getQueueStatus("Q2"));

// Check a ticket that does not exist
console.log("Test 8: Invalid ticket");
console.log(queuecare.getQueueStatus("Q999"));

