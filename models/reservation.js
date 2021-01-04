const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create Schema
const reservationSchema = new Schema({
  lastName: String,
  firstName: String,
  startDate: String,
  endDate: String,
  message: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = ReservationMessage = mongoose.model(
  "reservationMessage",
  reservationSchema
);