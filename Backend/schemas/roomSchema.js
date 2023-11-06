// const mongoose = require('mongoose');

// const accommodationSchema = mongoose.Schema({
    
//   title:          { type: String, required: true },
//   host:           { type: String, required: true },
//   location:       { type: String, required: true },
//   description:    { type: String, required: true },
//   price:          { type: Number, required: true },
//   imageUrl:       { type: String, required: true }
// })

// module.exports = mongoose.model('Accommodation', accommodationSchema)

const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({ // Changed accommodationSchema to roomSchema
    
  title:          { type: String, required: true },
  host:           { type: String, required: true },
  location:       { type: String, required: true },
  description:    { type: String, required: true },
  price:          { type: Number, required: true },
  imageUrl:       { type: String, required: true }
})

module.exports = mongoose.model('Room', roomSchema); // Changed Accommodation to Room, accommodationSchema to roomSchema
