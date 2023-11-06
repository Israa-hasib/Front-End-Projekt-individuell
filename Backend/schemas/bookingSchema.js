const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({ 
    
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  room: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: "Room",
    required: true
  },
  checkin: {type: String, required: true},
  checkout: {type: String, required: true}
})

module.exports = mongoose.model('Booking', bookingSchema); 
