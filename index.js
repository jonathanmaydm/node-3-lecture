const express = require("express");
const { json } = require("body-parser");
const app = express();
const numbers = [12, 4, 63, 19, 48];

app.use(json());

// We need to know the date and time for every request.

app.get("/api/numbers", (req, res, next) => {
  res.json(numbers);
});

// The routes below should be protected.
app.post("/api/numbers", (req, res, next) => {
  numbers.push(req.body.number);
  res.json(numbers);
});
app.put("/api/numbers/:id", (req, res, next) => {
  numbers.splice(req.params.id, 1, req.body.number);
  res.json(numbers);
});

// There's a bug here, let's use middleware to find it
app.delete("/api/numbers/:id", (req, res, next) => {
  numbers.splice(req.body.id, 1);
  res.json(numbers);
});

app.listen(5050, () => "Listening on 5050");
