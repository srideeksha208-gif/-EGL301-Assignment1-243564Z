

#  Assignment 1 –  Inclusive Theme Park Queue System

## Project Description

QueueCare is a theme park queue management system designed to reduce waiting difficulties and improve accessibility for visitors.

It allows visitors to join ride queues, receive queue tickets, check their positions and view estimated waiting times.

Eligible visitors, including elderly people, young children and visitors with additional needs, can use an approved virtual queue to wait more comfortably without losing their place.

The project uses JavaScript and Node.js, with arrays and objects to simulate ride and visitor data.

## Functions

1. **joinQueue(visitorId, rideId)** – Adds a visitor to a ride queue and generates a ticket number.
2. **getQueueStatus(ticketNumber)** – Displays the visitor's queue position, queue type and estimated waiting time.
3. **calculateWaitTime(rideId, position)** – Calculates estimated waiting time using ride capacity and cycle duration.
4. **leaveQueue(ticketNumber)** – Cancels a visitor's queue ticket and removes them from the queue.
5. **getQueueSummary(rideId)** – Shows the total number of regular and virtual queue visitors.
6. **getShortestQueue()** – Recommends the open ride with the shortest estimated waiting time.
7. **updateRideStatus(rideId, newStatus)** – Allows ride status to be changed to Open, Closed or Maintenance.

## How to Run

1. Open the project folder in Visual Studio Code.
2. Make sure Node.js is installed.
3. Open the terminal.
4. Run `node app.js`.
5. View the test results in the terminal.

## References

**Universal Studios Singapore Official App**

https://apps.apple.com/sg/app/universal-studios-singapore/id1462742095

Reference for theme park ride information and waiting-time features.

## AI Declaration

ChatGPT was used for project ideas, mock data generation .