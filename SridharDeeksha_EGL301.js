
 // QueueCare - Theme Park Queue Management System
 // Helps visitors check ride availability and get queue numbers.
 // Approved virtual queue visitors can wait elsewhere until their turn.

let ride1 = {
    rideId: "R001",
    rideName: "Dragon Coaster",
    capacity: 8,
    cycleTime: 4,
    status: "Open",
    queue: []
};

let ride2 = {
    rideId: "R002",
    rideName: "Galaxy Spin",
    capacity: 12,
    cycleTime: 3,
    status: "Open",
    queue: []
};

let ride3 = {
    rideId: "R003",
    rideName: "Jungle Rapids",
    capacity: 6,
    cycleTime: 5,
    status: "Maintenance",
    queue: []
};

// Store all rides in one array.
let rides = [ride1, ride2, ride3];

let visitor1 = {
    visitorId: "V001",
    visitorName: "Alex",
    queueType: "Virtual",
    approved: true,
    ticketNumber: ""
};

let visitor2 = {
    visitorId: "V002",
    visitorName: "Sarah",
    queueType: "Regular",
    approved: false,
    ticketNumber: ""
};

let visitor3 = {
    visitorId: "V003",
    visitorName: "Daniel",
    queueType: "Virtual",
    approved: true,
    ticketNumber: ""
};

let visitor4 = {
    visitorId: "V004",
    visitorName: "Emma",
    queueType: "Regular",
    approved: false,
    ticketNumber: ""
};

let visitor5 = {
    visitorId: "V005",
    visitorName: "Ryan",
    queueType: "Regular",
    approved: false,
    ticketNumber: ""
};

let visitor6 = {
    visitorId: "V006",
    visitorName: "Sophia",
    queueType: "Virtual",
    approved: true,
    ticketNumber: ""
};

let visitor7 = {
    visitorId: "V007",
    visitorName: "Ethan",
    queueType: "Regular",
    approved: false,
    ticketNumber: ""
};

let visitor8 = {
    visitorId: "V008",
    visitorName: "Olivia",
    queueType: "Virtual",
    approved: true,
    ticketNumber: ""
};

let visitor9 = {
    visitorId: "V009",
    visitorName: "Noah",
    queueType: "Regular",
    approved: false,
    ticketNumber: ""
};

let visitor10 = {
    visitorId: "V010",
    visitorName: "Mia",
    queueType: "Virtual",
    approved: true,
    ticketNumber: ""
};

// Store all visitors in one array.
let visitors = [
    visitor1, visitor2, visitor3, visitor4, visitor5,
    visitor6, visitor7, visitor8, visitor9, visitor10
];

// Start the ticket numbering from Q1.
let nextTicketNumber = 1;


module.exports = {

    // FUNCTION 1: Add a visitor to a ride queue.
    joinQueue(visitorId, rideId) {

        let visitor = null;
        let ride = null;

        // Find the visitor using the visitor ID.
        for (let i = 0; i < visitors.length; i++) {
            if (visitors[i].visitorId == visitorId) {
                visitor = visitors[i];
                break;
            }
        }

        // Find the ride using the ride ID.
        for (let i = 0; i < rides.length; i++) {
            if (rides[i].rideId == rideId) {
                ride = rides[i];
                break;
            }
        }

        // Check if the visitor exists.
        if (visitor == null) {
            return "Visitor not found";
        }

        // Check if the ride exists.
        if (ride == null) {
            return "Ride not found";
        }

        // Check if the ride is open.
        if (ride.status != "Open") {
            return "Ride is not open";
        }

        // Check whether the queue type is valid.
        if (visitor.queueType != "Regular" &&
            visitor.queueType != "Virtual") {
            return "Invalid queue type";
        }

        // Virtual queue visitors must be approved.
        if (visitor.queueType == "Virtual" &&
            visitor.approved != true) {
            return "Virtual queue not approved";
        }

        // Check if the visitor already has a ticket.
        if (visitor.ticketNumber != "") {
            return "Visitor already has a ticket";
        }

        // Create a new queue ticket.
        let ticket = {
            ticketNumber: "Q" + nextTicketNumber,
            visitorId: visitor.visitorId,
            visitorName: visitor.visitorName,
            rideId: ride.rideId,
            queueType: visitor.queueType
        };

        // Add the ticket to the end of the ride queue.
        ride.queue[ride.queue.length] = ticket;

        // Save the ticket number in the visitor record.
        visitor.ticketNumber = ticket.ticketNumber;

        // Increase the number for the next ticket.
        nextTicketNumber = nextTicketNumber + 1;

        // Return the new ticket.
        return ticket;
    },


    // FUNCTION 2: Check a visitor's queue status.
    getQueueStatus(ticketNumber) {

        // Search through all the rides.
        for (let i = 0; i < rides.length; i++) {

            // Search through each ride's queue.
            for (let j = 0; j < rides[i].queue.length; j++) {

                // Check if the ticket number matches.
                if (rides[i].queue[j].ticketNumber == ticketNumber) {

                    // Array indexes start at 0, so add 1.
                    let position = j + 1;

                    // Use Function 3 to calculate waiting time.
                    let waitTime = this.calculateWaitTime(
                        rides[i].rideId, position
                    );

                    // Return the queue information.
                    return {
                        ticketNumber: ticketNumber,
                        rideName: rides[i].rideName,
                        queuePosition: position,
                        queueType: rides[i].queue[j].queueType,
                        estimatedWait: waitTime,
                        rideStatus: rides[i].status
                    };
                }
            }
        }

        // Return a message if the ticket is not found.
        return "Ticket not found";
    },


    // FUNCTION 3: Calculate the estimated waiting time.
    calculateWaitTime(rideId, position) {

        let ride = null;

        // Search for the ride using its ID.
        for (let i = 0; i < rides.length; i++) {
            if (rides[i].rideId == rideId) {
                ride = rides[i];
                break;
            }
        }

        // Check if the ride exists.
        if (ride == null) {
            return "Ride not found";
        }

        // Check if the ride is open.
        if (ride.status != "Open") {
            return "Ride is not open";
        }

        // Check if the ride information is valid.
        if (ride.capacity <= 0 || ride.cycleTime <= 0) {
            return "Invalid ride settings";
        }

        // Check if the queue position is valid.
        if (position == undefined || position <= 0) {
            return "Invalid queue position";
        }

        // Start counting the number of ride cycles.
        let cycles = 0;

        // Count how many ride cycles are needed.
        for (let people = 0; people < position; people = people + ride.capacity) {
            cycles = cycles + 1;
        }

        // Calculate the total estimated waiting time.
        return cycles * ride.cycleTime;
    },

    // FUNCTION 4: Allow a visitor to leave the queue.
    leaveQueue(ticketNumber) {

        // Search through all the rides.
        for (let i = 0; i < rides.length; i++) {

            // Create an empty array to store remaining tickets.
            let newQueue = [];
            let found = false;
            let visitorId = "";

            // Check each ticket in the ride queue.
            for (let j = 0; j < rides[i].queue.length; j++) {

                // Check if the ticket number matches.
                if (rides[i].queue[j].ticketNumber == ticketNumber) {

                    // Remember which visitor is leaving.
                    found = true;
                    visitorId = rides[i].queue[j].visitorId;

                } else {

                    // Keep tickets that are not cancelled.
                    newQueue[newQueue.length] = rides[i].queue[j];
                }
            }

            // If the ticket was found in this ride.
            if (found == true) {

                // Replace the old queue with the remaining tickets.
                rides[i].queue = newQueue;

                // Find the visitor and clear their ticket number.
                for (let k = 0; k < visitors.length; k++) {

                    if (visitors[k].visitorId == visitorId) {
                        visitors[k].ticketNumber = "";
                        break;
                    }
                }

                // Return a confirmation message.
                return ticketNumber + " has left the queue";
            }
        }

        // If no matching ticket was found.
        return "Ticket not found";
    },

    
    // FUNCTION 5: Show the number of visitors waiting for a ride.
    getQueueSummary(rideId) {

        // Search for the ride using its ID.
        for (let i = 0; i < rides.length; i++) {

            if (rides[i].rideId == rideId) {

                let regular = 0;
                let virtual = 0;

                // Check the tickets in the ride queue.
                for (let j = 0; j < rides[i].queue.length; j++) {

                    if (rides[i].queue[j].queueType == "Regular") {
                        regular = regular + 1;
                    }

                    if (rides[i].queue[j].queueType == "Virtual") {
                        virtual = virtual + 1;
                    }
                }

                // Return the queue summary.
                return {
                    rideName: rides[i].rideName,
                    totalWaiting: rides[i].queue.length,
                    regularQueue: regular,
                    virtualQueue: virtual
                };
            }
        }

        return "Ride not found";
    },


    // FUNCTION 6: Find the ride with the shortest waiting time.
    getShortestQueue() {

        let shortestRide = null;
        let shortestWait = null;

        // Check all the rides.
        for (let i = 0; i < rides.length; i++) {

            // Only check rides that are open.
            if (rides[i].status == "Open") {

                // Find the position of the next visitor.
                let position = rides[i].queue.length + 1;

                // Use Function 3 to calculate waiting time.
                let waitTime = this.calculateWaitTime(
                    rides[i].rideId, position
                );

                // Check if this ride has a shorter waiting time.
                if (shortestRide == null || waitTime < shortestWait) {

                    shortestRide = rides[i];
                    shortestWait = waitTime;
                }
            }
        }

        // Check if there are any open rides.
        if (shortestRide == null) {
            return "No open rides available";
        }

        // Return the recommended ride.
        return {
            rideId: shortestRide.rideId,
            rideName: shortestRide.rideName,
            visitorsWaiting: shortestRide.queue.length,
            estimatedWait: shortestWait
        };
    }


};
