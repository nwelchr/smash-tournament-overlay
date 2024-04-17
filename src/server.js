const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3001;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Serve the React build files (you need to run 'npm run build' in the React app first)
app.use(express.static(path.join(__dirname, "build")));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // allow requests from any origin
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/overlay", (req, res) => {
  res.sendFile(path.join(__dirname, "overlay.html"));
});

app.get("/state", (req, res) => {
  res.sendFile(path.join(__dirname, "state.json"));
  console.log("state.json sent");
});

app.post("/update-scores", (req, res) => {
  const { scores } = req.body;
  console.log({ scores }, __dirname);
  fs.writeFile(
    path.join(__dirname, "state.json"),
    JSON.stringify(scores, null, 2),
    (err) => {
      if (err) {
        console.error("Failed to write file:", err);
        res.status(500).send("Failed to update scores");
      } else {
        res.send("Scores updated successfully");
      }
    }
  );
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
