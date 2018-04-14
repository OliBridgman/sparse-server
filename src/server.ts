import express from "express";

// Create a new express application instance
const app: express.Application = express();

// The port the express app will listen on
const port: number = Number(process.env.PORT) || 3000;

// Serve the application at the given port
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});
