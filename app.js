require("dotenv").config(); //.env file configuration
const express = require("express"); // Import Express Js library
const bodyParser = require("body-parser");
const app = express(); // Create Object
const userRouter = require("./api/travel/travel.router"); // Import user.Router.js class
var cors = require("cors");
var fileupload = require("express-fileupload");


app.use(
  fileupload({
    useTempFiles: true,
  })
);

// app.use(express.json({ limit: "5mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
// app.use(express.urlencoded({ limit: "5mb" }));
// app.use(express.bodyParser({ limit: "5mb" }));

// app.use(express.json()); //json Convert javascript object
app.use(cors());

app.use("/api/users", userRouter); //Go To user.Router.js Class

app.listen(process.env.APP_PORT, () => {
  console.log("Server up and Running in Port Number", process.env.APP_PORT);
});
