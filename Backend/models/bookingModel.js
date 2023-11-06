const Booking = require('../schemas/bookingSchema');

exports.createNewBooking = async (req, res) => {
  const { user, room, checkin, checkout } = req.body; 
  console.log("REQ BODY", req.body);
  if (!user || !room || !checkin || !checkout) {
    res.status(400).json({
      message: 'You need to enter all the fields'
    });
    return;
  }
  try {
    const newBooking = await Booking.create({ user, room, checkin, checkout }); 
    await newBooking.populate("room");

    res.status(201).json(newBooking);
  } catch (error) {
    console.log("Error in creation of booking", error);
    res.status(500).json({ message: 'Something went wrong when adding the booking' }); 
  }
}

exports.getBookings = (req, res) => {
  Booking.find()
    .then(bookings => {
      res.status(200).json(bookings);
    })
    .catch(() => {
      res.status(500).json({
        message: 'Could not get the bookings'
      });
    });
}

exports.getUserBookings = (req, res) => {
  const { _id, } = req.userData;
  Booking.find({ user: _id })
    .populate('room') 
    .then(bookings => {
      res.status(200).json(bookings);
    })
    .catch(error => {
      console.log("ERROR: getting user bookings", error);
      res.status(500).json({
        message: "Could not get user bookings"
      });
    })
}

exports.getBookingById = (req, res) => {
  Booking.findById(req.params.id)
    .then(booking => {
      if (!booking) {
        res.status(404).json({ message: 'Could not find that booking' }); 
        return;
      }
      res.status(200).json(booking);
    })
    .catch(() => {
      res.status(500).json({
        message: 'Something went wrong'
      });
    });
}

exports.updateBooking = (req, res) => {
  Booking.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(booking => {
      if (!booking) {
        res.status(404).json({ message: 'Could not find that booking' }); 
        return;
      }
      res.status(200).json(booking);
    })
    .catch(() => {
      res.status(500).json({
        message: 'Something went wrong when updating the booking'
      });
    });
}

exports.deleteBooking = (req, res) => {
  Booking.findByIdAndDelete(req.params.id)
    .then(booking => {
      if (!booking) {
        res.status(404).json({ message: 'Could not find that booking' }); 
        return;
      }
      res.status(200).json({ id: booking._id });
    })
    .catch(() => {
      res.status(500).json({
        message: 'Something went wrong when deleting the booking' 
      });
    });
}
