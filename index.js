const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
let counter = 1;

const app = express();
const port = 8080;

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(cors());

// POST route to receive location data
app.post("/location", (req, res) => {
  const { lat, long } = req.body;

  if (!lat || !long) {
    return res.status(400).send("Latitude and longitude are required.");
  }

  // Log the latitude and longitude
  console.log(
    `Received location ${counter}: Latitude = ${lat}, Longitude = ${long}`
  );

  // Send a response
  counter += 1;
  res.status(200).send("Location received successfully.");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
