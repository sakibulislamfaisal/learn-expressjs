const express = require("express");
const app = express();

//first route
app.get("/hello", (req, res) => {
  res.send("hello bangladesh");
});

//call same route by multiple method
app.post("/hello", (req, res) => {
  res.send("you just send the post request");
});

//call special all method
app.all("/test", (req, res) => {
  res.send("It accept all types of HTTP requests");
});

//for using router
const think = require("./think");
app.use("/thinks", think);

//dynamic routes by id that means params
// app.get("/:id", (req, res) => {
//   res.send("The user id is " + req.params.id);
// });

//replace id by routes
app.get("/thinks/:name/:id", (req, res) => {
  res.send(" id " + req.params.id + " and name " + req.params.name);
});

//get condition only access 5 digit id
app.get("/thinks/:id([0-9]{5})", (req, res) => {
  res.send(" id : " + req.params.id);
});

//middleware request protocol
// app.use("/middle", (req, res, next) => {
//   console.log("The Date is : " + Date.now());
//   next();
// });
// //call the route
// app.get("/middle", (req, res) => {
//   res.send("start");
// });

app.get("/help", (req, res) => {
  res.send("<h1>This is help page...</h1>");
});

//create an custom middleware
const customMiddleWare = (req, res, next) => {
  //   console.log("I am logged", req.url);
  //   next();
  if (req.url == "/help") {
    res.send("the page is blocked by admin");
  }
  next();
};

app.use(customMiddleWare);

//connection to port
const port = 4200;
app.listen(port, () => console.log("Running on the server", port));
