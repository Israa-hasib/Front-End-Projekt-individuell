// const Accommodation = require('../Schemas/accommodationSchema');


//   exports.createNewAccommodation = (req, res) => {
//     const { title, host, location, description, price, imageUrl } = req.body;
  
//     if(!title || !host || !location || !description || !price || !imageUrl) {
//       res.status(400).json({
//         message: 'You need to enter all the fields'
//       })
//       return
//     }
  
//     Accommodation.create({ title, host, location, description, price, imageUrl })
//       .then(data => res.status(201).json(data))
//       .catch(() => res.status(500).json({ message: 'Someting went wrong when adding the accommodation'}))
//   }



// exports.getAccommodations = (req, res) => {

//   Accommodation.find()
//     .then(accommodations => {
//       res.status(200).json(accommodations)
//     })
//     .catch(() => {
//       res.status(500).json({
//         message: 'Could not get the accommodations'
//       })
//     })
// }



// exports.getAccommodationById = (req, res) => {

//   Accommodation.findById(req.params.id)
//     .then(accommodation => {
//       if(!accommodation) {
//         res.status(404).json({ message: 'could not find that accommodation'})
//         return
//       }

//       res.status(200).json( accommodation ) 
//     })
//     .catch(() => {
//       res.status(500).json({
//         message: 'Someting went wrong'
//       })
//     })
//   }



// exports.updateAccommodation = (req, res) => {

//   Accommodation.findByIdAndUpdate(req.params.id, req.body, { new: true })
//     .then(accommodation => {
//       if(!accommodation) {
//         res.status(404).json({ message: 'could not find that accommodation'})
//         return
//       }

//       res.status(200).json(accommodation)
//     })
//     .catch(() => {
//       res.status(500).json({
//         message: 'Someting went wrong when updating the accommodation'
//       })
//     })

// }



// exports.deleteAccommodation = (req, res) => {

//   Accommodation.findByIdAndDelete(req.params.id)
//     .then(accommodation => {
//       if(!accommodation) {
//         res.status(404).json({ message: 'could not find that accommodation'})
//         return
//       }

//       res.status(200).json({ id: accommodation._id })
//     })
//     .catch(() => {
//       res.status(500).json({
//         message: 'Someting went wrong when deleteing the accommodation'
//       })
//     })
// }

const Room = require('../Schemas/accommodationSchema'); // Changed Accommodation to Room

exports.createNewRoom = (req, res) => { // Changed createNewAccommodation to createNewRoom
  const { title, host, location, description, price, imageUrl } = req.body;

  if (!title || !host || !location || !description || !price || !imageUrl) {
    res.status(400).json({
      message: 'You need to enter all the fields'
    })
    return
  }

  Room.create({ title, host, location, description, price, imageUrl }) // Changed Accommodation to Room
    .then(data => res.status(201).json(data))
    .catch(() => res.status(500).json({ message: 'Something went wrong when adding the room'})) // Corrected typo in message
}

exports.getRooms = (req, res) => { // Changed getAccommodations to getRooms

  Room.find()
    .then(rooms => {
      res.status(200).json(rooms) // Changed accommodations to rooms
    })
    .catch(() => {
      res.status(500).json({
        message: 'Could not get the rooms' // Changed accommodations to rooms
      })
    })
}

exports.getRoomById = (req, res) => { // Changed getAccommodationById to getRoomById

  Room.findById(req.params.id) // Changed Accommodation to Room
    .then(room => {
      if (!room) {
        res.status(404).json({ message: 'Could not find that room' }) // Changed accommodation to room
        return
      }

      res.status(200).json(room) // Changed accommodation to room
    })
    .catch(() => {
      res.status(500).json({
        message: 'Something went wrong'
      })
    })
}

exports.updateRoom = (req, res) => { // Changed updateAccommodation to updateRoom

  Room.findByIdAndUpdate(req.params.id, req.body, { new: true }) // Changed Accommodation to Room
    .then(room => {
      if (!room) {
        res.status(404).json({ message: 'Could not find that room' }) // Changed accommodation to room
        return
      }

      res.status(200).json(room) // Changed accommodation to room
    })
    .catch(() => {
      res.status(500).json({
        message: 'Something went wrong when updating the room'
      })
    })
}

exports.deleteRoom = (req, res) => { // Changed deleteAccommodation to deleteRoom

  Room.findByIdAndDelete(req.params.id) // Changed Accommodation to Room
    .then(room => {
      if (!room) {
        res.status(404).json({ message: 'Could not find that room' }) // Changed accommodation to room
        return
      }

      res.status(200).json({ id: room._id }) // Changed accommodation to room
    })
    .catch(() => {
      res.status(500).json({
        message: 'Something went wrong when deleting the room' // Changed accommodation to room
      })
    })
}
