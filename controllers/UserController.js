const express = require("express");
const UserModel = require("../models/User.js");

const UserController = {
  find: async (req, res) => {
    const foundCar = await UserModel.find({ name: req.params.cars });
    res.json(foundCar);
  },
  all: async (req, res) => {
    const allUsers = await UserModel.find();
    res.json(allUsers);
  },
  create: async (req, res) => {
    const newUser = new UserModel(req.body);
    const saveUser = await newUser.save();
    res.json(saveUser);
  },
  getAllCars: async (req, res) => {
    const foundUser = await UserController.Model.find({
      name: req.params.cars,
    }).populate("cars");
    res.json(foundUser);
  },
};
module.exports = UserController;
