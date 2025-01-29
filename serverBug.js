const express = require('express');
const app = express();
app.get('/', (req, res) => {
  setTimeout(() => {
    res.send('Hello World!');
  }, 5000); // Simulate a 5-second delay
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

//In this example, a request to the server's root path will result in a 5-second delay before the response is sent.  If a client sends a request and doesn't wait long enough, the response will never be received. This could lead to unexpected behavior or errors in applications that depend on timely responses from the server.