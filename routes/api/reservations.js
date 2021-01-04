const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

//Item model
const Reservation = require("../../models/reservation");

// @route GET api/items
// @desc Get all Items
// @access Public
router.get("/", (req, res) => {
    Reservation.find()
      .then((reservations) => res.status(200).json(reservations))
      .catch((error) => {
        res.json({ message: error });
      });
  });

  module.exports = router;