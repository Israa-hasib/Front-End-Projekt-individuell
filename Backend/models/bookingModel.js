// const Reservation = require('../Schemas/reservationSchema');


//   exports.createNewReservation = async (req, res) => {
//     const { user, accommodation, checkin, checkout } = req.body;
//     console.log("REQ BODY", req.body)
//     if(!user || !accommodation || !checkin || !checkout) {
//       res.status(400).json({
//         message: 'You need to enter all the fields'
//       })
//       return
//     } 
//     try {
//       const newReservation = await Reservation.create({ user, accommodation, checkin, checkout })
//       await newReservation.populate("accommodation")
      
//       res.status(201).json(newReservation)
//     }
//     catch(error) {
//         console.log("Error in creation of reservation", error)
//         res.status(500).json({ message: 'Someting went wrong when adding the reservation'})
//     }
//   }



// exports.getReservations = (req, res) => {

//   Reservation.find()
//     .then(reservations => {
//       res.status(200).json(reservations)
//     })
//     .catch(() => {
//       res.status(500).json({
//         message: 'Could not get the reservations'
//       })
//     })
// }

// exports.getUserReservations = (req, res) => {
//   const { _id, } = req.userData;
//   //TODO get all reservations based on user
//   Reservation.find({ user: _id })
//   .populate('accommodation')
//   .then(reservations => {
//     res.status(200).json(reservations)
//   })
//   .catch(error => {
//     console.log("ERROR: getting user reservations", error)
//     res.status(500).json({
//       message: "Could not get user reservations"
//     })
//   })
  
// }



// exports.getReservationById = (req, res) => {

//   Reservation.findById(req.params.id)
//     .then(reservation => {
//       if(!reservation) {
//         res.status(404).json({ message: 'could not find that reservation'})
//         return
//       }

//       res.status(200).json( reservation ) 
//     })
//     .catch(() => {
//       res.status(500).json({
//         message: 'Someting went wrong'
//       })
//     })
//   }



// exports.updateReservation = (req, res) => {

//   Reservation.findByIdAndUpdate(req.params.id, req.body, { new: true })
//     .then(reservation => {
//       if(!reservation) {
//         res.status(404).json({ message: 'could not find that reservation'})
//         return
//       }

//       res.status(200).json(reservation)
//     })
//     .catch(() => {
//       res.status(500).json({
//         message: 'Someting went wrong when updating the reservation'
//       })
//     })

// }



// exports.deleteReservation = (req, res) => {

//   Reservation.findByIdAndDelete(req.params.id)
//     .then(reservation => {
//       if(!reservation) {
//         res.status(404).json({ message: 'could not find that reservation'})
//         return
//       }

//       res.status(200).json({ id: reservation._id })
//     })
//     .catch(() => {
//       res.status(500).json({
//         message: 'Someting went wrong when deleteing the reservation'
//       })
//     })
// }
const Booking = require('../schemas/bookingSchema');

exports.createNewBooking = async (req, res) => {
  const { user, room, checkin, checkout } = req.body; // Changed accommodation to room
  console.log("REQ BODY", req.body);
  if (!user || !room || !checkin || !checkout) {
    res.status(400).json({
      message: 'You need to enter all the fields'
    });
    return;
  }
  try {
    const newBooking = await Booking.create({ user, room, checkin, checkout }); // Changed accommodation to room
    await newBooking.populate("room"); // Changed accommodation to room

    res.status(201).json(newBooking);
  } catch (error) {
    console.log("Error in creation of booking", error);
    res.status(500).json({ message: 'Something went wrong when adding the booking' }); // Corrected typo in message
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
    .populate('room') // Changed accommodation to room
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
        res.status(404).json({ message: 'Could not find that booking' }); // Corrected typo in message
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
        res.status(404).json({ message: 'Could not find that booking' }); // Corrected typo in message
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
        res.status(404).json({ message: 'Could not find that booking' }); // Corrected typo in message
        return;
      }
      res.status(200).json({ id: booking._id });
    })
    .catch(() => {
      res.status(500).json({
        message: 'Something went wrong when deleting the booking' // Corrected typo in message
      });
    });
}
