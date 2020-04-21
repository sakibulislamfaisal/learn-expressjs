const express = require("express");
const app = express();
app.set("view engine", "pug");
app.set("views", "./views");
// const middleWare = (req, res, next) => {
//   //   console.log("%s %s", req.url, req.method);
//   //   next();
//   if (req.url === "/help") {
//     res.send("The page is blocked by admin");
//   }
//   next();
// };
// app.use(middleWare);

app.get("/dynamic_view", (req, res) => {
  res.render("dynamic", {
    // name: "faisal rahman",
    // url: "http://www.tutorialspoint.com",
    user: { name: "Ayush", age: "20" },
  });
});
app.get("/first_template", function (req, res) {
  res.render("first_view");
});

app.get("/", (req, res) => {
  res.send("<h2>Welcome to express js</h2>");
});

app.get("/help", (req, res) => {
  res.send("<h2>How Can I Help You!!!</h2>");
});

//connection to port
const port = 3000;
app.listen(port, () => console.log("Running on the server", port));
