require("dotenv-safe").config({ allowEmptyValues: true });

import express from "express";
import bodyParser from "body-parser";

import { db } from "./db";

// Create a new express application instance
const app: express.Application = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// The port the express app will listen on
const port: number = Number(process.env.PORT) || 3000;

const router: express.Router = express.Router();

router.get("/", async function(req, res) {
  const results = await db.events.all();
  res.send(results);
});

router.post("/", async function(req, res) {
  const { cid, type, payload } = req.body;
  const event = { cid, type, payload };

  const result = db.events.add(event);
  res.send(result);
});

app.use("/", router);

// Serve the application at the given port
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});
