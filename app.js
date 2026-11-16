
const queuecare = require("./SridharDeeksha_EGL301.js");

console.log("===== Function 1 Testing =====");

// Test 1: Alex joins Dragon Coaster.
console.log("Test 1: Alex joins the queue");
console.log(queuecare.joinQueue("V001", "R001"));

// Test 2: Sarah joins Dragon Coaster.
console.log("Test 2: Sarah joins the queue");
console.log(queuecare.joinQueue("V002", "R001"));

// Test 3: Alex tries to join again.
console.log("Test 3: Duplicate queue entry");
console.log(queuecare.joinQueue("V001", "R001"));

// Test 4: Visitor does not exist.
console.log("Test 4: Invalid visitor");
console.log(queuecare.joinQueue("V999", "R001"));

// Test 5: Visitor tries to join a ride under maintenance.
console.log("Test 5: Ride under maintenance");
console.log(queuecare.joinQueue("V003", "R003"));


console.log("===== Function 2 Testing =====");

// Test 6: Check Alex's queue status.
console.log("Test 6: Check Alex's queue status");
console.log(queuecare.getQueueStatus("Q1"));

// Test 7: Check Sarah's queue status.
console.log("Test 7: Check Sarah's queue status");
console.log(queuecare.getQueueStatus("Q2"));

// Test 8: Check a ticket that does not exist.
console.log("Test 8: Invalid ticket");
console.log(queuecare.getQueueStatus("Q999"));


console.log("===== Function 3 Testing =====");

// Test 9: Calculate waiting time for position 1.
console.log("Test 9: Position 1 on Dragon Coaster");
console.log(queuecare.calculateWaitTime("R001", 1));

// Test 10: Calculate waiting time for position 9.
console.log("Test 10: Position 9 on Dragon Coaster");
console.log(queuecare.calculateWaitTime("R001", 9));

// Test 11: Calculate waiting time for a ride under maintenance.
console.log("Test 11: Maintenance ride");
console.log(queuecare.calculateWaitTime("R003", 1));


console.log("===== Function 4 Testing =====");

// Test 12: Alex cancels his ticket.
console.log("Test 12: Alex leaves the queue");
console.log(queuecare.leaveQueue("Q1"));

// Test 13: Check whether Alex's ticket was removed.
console.log("Test 13: Check cancelled ticket");
console.log(queuecare.getQueueStatus("Q1"));

// Test 14: Check Sarah's updated queue position.
console.log("Test 14: Check Sarah's position");
console.log(queuecare.getQueueStatus("Q2"));

// Test 15: Try cancelling a ticket that does not exist.
console.log("Test 15: Invalid ticket");
console.log(queuecare.leaveQueue("Q999"));

// Test 16: Alex joins again after cancelling.
console.log("Test 16: Alex joins again");
console.log(queuecare.joinQueue("V001", "R001"));
