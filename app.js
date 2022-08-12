const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const detectRouter = require("./routes/detect");

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("hi");
});

app.use("/detect", detectRouter);
app.get("/", (req, res) => {
  return res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.set("port", port);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
