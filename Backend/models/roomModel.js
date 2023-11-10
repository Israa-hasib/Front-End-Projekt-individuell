const Room = require('../schemas/roomSchema'); 

exports.createNewRoom = (req, res) => { 
  const { title, host, location, description, price, imageUrl } = req.body;
  const images = req.body.images || []

  if (!title || !host || !location || !description || !price || !imageUrl) {
    res.status(400).json({
      message: 'You need to enter all the fields'
    })
    return
  }

  Room.create({ title, host, location, description, price, imageUrl, images }) 
    .then(data => res.status(201).json(data))
    .catch(() => res.status(500).json({ message: 'Something went wrong when adding the room'}))
}

exports.getRooms = (req, res) => { 

  Room.find()
    .then(rooms => {
      res.status(200).json(rooms) 
    })
    .catch(() => {
      res.status(500).json({
        message: 'Could not get the rooms' 
      })
    })
}

exports.getRoomById = (req, res) => { 

  Room.findById(req.params.id)
    .then(room => {
      if (!room) {
        res.status(404).json({ message: 'Could not find that room' }) 
        return
      }

      res.status(200).json(room) 
    })
    .catch(() => {
      res.status(500).json({
        message: 'Something went wrong'
      })
    })
}

exports.updateRoom = (req, res) => { 

  Room.findByIdAndUpdate(req.params.id, req.body, { new: true }) 
    .then(room => {
      if (!room) {
        res.status(404).json({ message: 'Could not find that room' })
        return
      }

      res.status(200).json(room) 
    })
    .catch(() => {
      res.status(500).json({
        message: 'Something went wrong when updating the room'
      })
    })
}

exports.deleteRoom = (req, res) => { 

  Room.findByIdAndDelete(req.params.id) 
    .then(room => {
      if (!room) {
        res.status(404).json({ message: 'Could not find that room' }) 
        return
      }

      res.status(200).json({ id: room._id })
    })
    .catch(() => {
      res.status(500).json({
        message: 'Something went wrong when deleting the room'
      })
    })
}
