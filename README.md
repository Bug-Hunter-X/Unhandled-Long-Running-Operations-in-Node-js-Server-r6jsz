# Unhandled Long-Running Operations in Node.js Server

This repository demonstrates a common issue in Node.js applications: the lack of proper handling for long-running operations, which can lead to unexpected server hangs and client-side timeouts.

## Bug Description

The `serverBug.js` file contains a simple Express.js server that simulates a 5-second delay before responding to a request.  In real-world scenarios, this delay could be caused by database queries, file processing, or other time-consuming tasks. Without proper handling, this can cause the server to become unresponsive to other requests.

## Bug Solution

The solution in `serverBugSolution.js` addresses this by using asynchronous operations with promises, ensuring that other requests aren't blocked by long tasks.

## How to reproduce the bug
1. Clone the repository.
2. Run `node serverBug.js`
3. Send a request to `http://localhost:3000/`.
4. Observe that the request might hang or timeout for some clients before receiving a response.

## How to run the solution
1. Clone the repository.
2. Run `node serverBugSolution.js`
3. Send multiple requests to `http://localhost:3000/`. Notice that the server correctly handles concurrent requests without hanging.  Observe the improved response time.
