const express = require("express");
const CarModel = require("../models/Car.js");

const CarController = {
  //   find: async (req, res) => {
  //     const foundCar = await CarModel.find({ name: req.params.cars });
  //     res.json(foundCar);
  //   },
  all: async (req, res) => {
    const allCars = await CarModel.find();
    res.json(allCars);
  },
  create: async (req, res) => {
    const newCar = new CarModel(req.body);
    const saveCar = await newCar.save();
    res.json(saveCar);
  },
  //   getAllCars: async (req, res) => {
  //     const foundUser = await UserController.Model.find({
  //       name: req.params.cars,
  //     }).populate("cars");
  //     res.json(foundUser);
  //   },
};
module.exports = CarController;
