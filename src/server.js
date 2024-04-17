const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3001;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "../public")));

// Serve the React build files if you have a production build you want to serve
app.use(express.static(path.join(__dirname, "build")));

app.get("/overlay", (req, res) => {
  res.sendFile(path.join(__dirname, "overlay.html"));
});

app.get("/state", (req, res) => {
  res.sendFile(path.join(__dirname, "state.json"));
});

app.post("/update-scores", (req, res) => {
  const { scores } = req.body;
  const filePath = path.join(__dirname, "state.json");
  fs.writeFile(filePath, JSON.stringify(scores, null, 2), (err) => {
    if (err) {
      console.error("Failed to write file:", err);
      res.status(500).send("Failed to update scores");
    } else {
      res.send("Scores updated successfully");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
