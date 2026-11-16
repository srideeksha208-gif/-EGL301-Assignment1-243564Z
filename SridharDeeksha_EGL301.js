// queue management system designed to reduce long waiting times and improve accessibility at theme parks. 
//It allows visitors to check ride availability, view estimated waiting times, and receive queue numbers.
//Elderly visitors, young children, and people with special needs who are eligible for assistance can use a virtual queue to wait comfortably elsewhere until their turn. 
//basically queue management in theme parks 


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


let visitors = [visitor1, visitor2, visitor3, visitor4, visitor5,
               visitor6, visitor7, visitor8, visitor9, visitor10];


let nextTicketNumber = 1;


module.exports = {

    // Function 1: Add a visitor to a ride queue
    joinQueue(visitorId, rideId) {

        let visitor = null;
        let ride = null;

        // Find the visitor
        for (let i = 0; i < visitors.length; i++) {
            if (visitors[i].visitorId === visitorId) {
                visitor = visitors[i];
                break;
            }
        }

        // Find the ride
        for (let i = 0; i < rides.length; i++) {
            if (rides[i].rideId === rideId) {
                ride = rides[i];
                break;
            }
        }

        // Check if visitor and ride exist
        if (visitor === null) {
            return "Visitor not found";
        }

        if (ride === null) {
            return "Ride not found";
        }

        // Check if the ride is open
        if (ride.status !== "Open") {
            return "Ride is not open";
        }

        // Check the visitor's queue type
        if (visitor.queueType !== "Regular" &&
            visitor.queueType !== "Virtual") {
            return "Invalid queue type";
        }

        // Check approval for virtual queue
        if (visitor.queueType === "Virtual" &&
            visitor.approved !== true) {
            return "Virtual queue not approved";
        }

        // Check if visitor is already in any ride queue
        for (let i = 0; i < rides.length; i++) {
            for (let j = 0; j < rides[i].queue.length; j++) {
                if (rides[i].queue[j].visitorId === visitorId) {
                    return "Visitor is already in a queue";
                }
            }
        }

        // Create a queue ticket
        let ticket = {
            ticketNumber: "Q" + nextTicketNumber,
            visitorId: visitor.visitorId,
            visitorName: visitor.visitorName,
            rideId: ride.rideId,
            queueType: visitor.queueType
        };

        // Update the ticket number
        nextTicketNumber = nextTicketNumber + 1;

        // Add the ticket to the ride queue
        ride.queue.push(ticket);

        // Save the ticket number in the visitor record
        visitor.ticketNumber = ticket.ticketNumber;

        return ticket;

    },

    // Function 2: Check a visitor's queue status
    getQueueStatus(ticketNumber) {

        // Search through all the rides
        for (let i = 0; i < rides.length; i++) {

            // Search through the queue of each ride
            for (let j = 0; j < rides[i].queue.length; j++) {

                // Check if the ticket number matches
                if (rides[i].queue[j].ticketNumber === ticketNumber) {

                    let position = j + 1;
                    let waitTime = null;

                    // Calculate wait only if the ride is open
                    if (rides[i].status === "Open") {
                        let capacity = rides[i].capacity;
                        let cycleTime = rides[i].cycleTime;

                        if (capacity > 0 && cycleTime > 0) {
                            let cycles = Math.ceil(position / capacity);
                            waitTime = cycles * cycleTime;
                        }
                    }

                    // Return the visitor's queue information
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

        return "Ticket not found";
    },

};

