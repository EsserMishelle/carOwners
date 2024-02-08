///////////////////////////////////////
// Import Dependencies
///////////////////////////////////////
const mongoose = require("mongoose");
const User = require("./User.js");

// const seedUsers = require("./seedDataUsers");
const startUsers = require("./seedDataUsers");
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

  // Delete all users
  User.deleteMany({})
    .then((deletedUsers) => {
      // add the starter users
      User.insertMany(startUsers)
        .then((createdUsers) => {
          console.log(createdUsers);
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
