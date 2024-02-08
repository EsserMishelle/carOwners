require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const morgan = require("morgan");
const path = require("path");

const cors = require("cors");
const PORT = process.env.PORT || 5000;

//connect to db
mongoose.connect(process.env.MONGO_URI);

mongoose.connection
  .on("open", () => console.log("connected"))
  .on("close", () => console.log("Disconnected form Mongoose"))
  .on("error", (error) => console.error(error));

app.use(express.json());
app.use(cors());

const UserControls = require("./controllers/UserController.js");
const CarControls = require("./controllers/CarController.js");

//// routes
app.get("/users", UserControls.all);
app.get("/users/create", UserControls.create);
app.get("/users/:cars", UserControls.find);
app.get("/users/:cars/cars", UserControls.getAllCars);

app.get("/cars", CarControls.all);
app.get("/cars/cars/create", CarControls.create);

app.listen(PORT);
