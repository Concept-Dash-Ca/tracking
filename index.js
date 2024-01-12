const express = require("express");
const morgan = require("morgan");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.get('/', (req, res) => {
    res.send("Hello Tracking!!")
})

app.get("/ip", async (req, res) => {
  console.log("ip", req.ip);
  console.log("ips", req.ips);
  console.log("headers", req.headers);
  return res.status(200).json({ message: "done"});
});

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});