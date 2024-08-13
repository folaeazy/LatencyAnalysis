const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Handle GET requests
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Node.js App</title>
      <style>
        body {
          background-color: black;
          color: white;
          font-family: Arial, sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }
        .container {
          text-align: center;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Hello from Me, This is a Latency analysis testing page for cloud platform!</h1>
      </div>
    </body>
    </html>
  `);
});


// Handle POST requests
app.post('/data', (req, res) => {
  const { name, value } = req.body;
  res.json({
    message: 'Data received.......',
    data: { name, value }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
