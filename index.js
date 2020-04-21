const express = require("express");
const app = express();

const middleWare = (req, res, next) => {
  //   console.log("%s %s", req.url, req.method);
  //   next();
  if (req.url === "/help") {
    res.send("The page is blocked by admin");
  }
  next();
};
app.use(middleWare);

app.get("/", (req, res) => {
  res.send("<h2>Welcome to express js</h2>");
});

app.get("/help", (req, res) => {
  res.send("<h2>How Can I Help You!!!</h2>");
});

//connection to port
const port = 4200;
app.listen(port, () => console.log("Running on the server", port));
