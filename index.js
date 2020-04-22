const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const multer = require("multer");
const upload = multer();
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

// app.get("/dynamic_view", (req, res) => {
//   res.render("dynamic", {
//     // name: "faisal rahman",
//     // url: "http://www.tutorialspoint.com",
//     user: { name: "Ayush", age: "20" },
//   });
// });
// app.get("/first_template", function (req, res) {
//   res.render("first_view");
// });

// for parsing application/json
app.use(bodyParser.json());
// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded
// for parsing multipart/form-data
app.use(upload.array());
app.use(express.static("public"));

// app.get("/", (req, res) => {
//   res.send("<h2>Welcome to express js</h2>");
// });
app.get("/", function (req, res) {
  res.render("form");
});

app.get("/help", (req, res) => {
  res.send("<h2>How Can I Help You!!!</h2>");
});

app.post("/", function (req, res) {
  console.log(req.body);
  res.send("received your request!");
});

//connection to port
const port = 4200;
app.listen(port, () => console.log("Running on the server", port));
