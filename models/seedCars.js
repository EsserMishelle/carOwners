///////////////////////////////////////
// Import Dependencies
///////////////////////////////////////
const mongoose = require("mongoose");
const Car = require("./Car");

const startCars = require("./seedDataCars");
// const seedDataCars = require("./seedDataCars"); //old name-changed the name

///////////////////////////////////////////
// Seed Code
////////////////////////////////////////////

// save the connection in a variable
const db = mongoose.connection;

// Make sure the code is not run until connected
db.on("open", () => {
  ///////////////////////////////////////////////
  // Write your Seed Code Below
  //////////////////////////////////////////////

  // Run any database queries in this function

  // Delete all cars
  Car.deleteMany({})
    .then((deletedCars) => {
      // add the starter cars
      Car.insertMany(startCars)
        .then((createdCars) => {
          console.log(createdCars);
          db.close();
        })
        .catch((err) => {
          console.error(err);
          db.close();
        });
    })
    .catch((err) => {
      console.error(err);
      db.close();
    });
});
