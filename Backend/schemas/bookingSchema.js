// const mongoose = require('mongoose');

// const reservationSchema = mongoose.Schema({
    
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//     required: true
//   },
//   accommodation: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Accommodation",
//     required: true
//   },
//   checkin: {type: String, required: true},
//   checkout: {type: String, required: true}
// })

// module.exports = mongoose.model('Reservation', reservationSchema)

const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({ // Changed reservationSchema to bookingSchema
    
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  room: { // Changed accommodation to room
    type: mongoose.Schema.Types.ObjectId,
    ref: "Room", // Changed Accommodation to Room
    required: true
  },
  checkin: {type: String, required: true},
  checkout: {type: String, required: true}
})

module.exports = mongoose.model('Booking', bookingSchema); // Changed Reservation to Booking, reservationSchema to bookingSchema
