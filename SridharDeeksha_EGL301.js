// queue management system designed to reduce long waiting times and improve accessibility at theme parks. 
//It allows visitors to check ride availability, view estimated waiting times, and receive queue numbers.
//Elderly visitors, young children, and people with special needs who are eligible for assistance can use a virtual queue to wait comfortably elsewhere until their turn. 
//basically queue management in theme parks 

let rides = [ride1, ride2, ride3];


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

let vistors = [visitor1, visitor2, visitor3, visitor4, visitor5,
               visitor6, visitor7, visitor8, visitor9, visitor10];


let visitor1 = {
    visitorId: "V001",
    visitorName: "Alex",
    queueType: "Virtual",
    approved: true,
    ticketNumber: "Q001"
};

let visitor2 = {
    visitorId: "V002",
    visitorName: "Sarah",
    queueType: "Regular",
    approved: false,
    ticketNumber: "Q002"
};

let visitor3 = {
    visitorId: "V003",
    visitorName: "Daniel",
    queueType: "Virtual",
    approved: true,
    ticketNumber: "Q003"
};

let visitor4 = {
    visitorId: "V004",
    visitorName: "Emma",
    queueType: "Regular",
    approved: false,
    ticketNumber: "Q004"
};

let visitor5 = {
    visitorId: "V005",
    visitorName: "Ryan",
    queueType: "Regular",
    approved: false,
    ticketNumber: "Q005"
};

let visitor6 = {
    visitorId: "V006",
    visitorName: "Sophia",
    queueType: "Virtual",
    approved: true,
    ticketNumber: "Q006"
};

let visitor7 = {
    visitorId: "V007",
    visitorName: "Ethan",
    queueType: "Regular",
    approved: false,
    ticketNumber: "Q007"
};

let visitor8 = {
    visitorId: "V008",
    visitorName: "Olivia",
    queueType: "Virtual",
    approved: true,
    ticketNumber: "Q008"
};

let visitor9 = {
    visitorId: "V009",
    visitorName: "Noah",
    queueType: "Regular",
    approved: false,
    ticketNumber: "Q009"
};

let visitor10 = {
    visitorId: "V010",
    visitorName: "Mia",
    queueType: "Virtual",
    approved: true,
    ticketNumber: "Q010"
};




module.exports = {
    // Your existing starter functions remain here
}
