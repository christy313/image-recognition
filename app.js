const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const http = require("http");
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
app.set("port", port);

// app.listen(port, () => {
//   console.log(`Listening on port ${port}`);
// });

const server = http.createServer(app);
server.listen(port);
server.on("listening", () => {
  console.log("Listening on " + port);
});
