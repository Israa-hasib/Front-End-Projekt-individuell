// const router = require('express').Router();
// const reservationModel = require('../Models/reservationModel')
// const auth = require('../Authentication/auth')


// router.post('/', reservationModel.createNewReservation);

// router.get('/', reservationModel.getReservations);

// router.get('/:id', reservationModel.getReservationById);

// router.put('/:id', reservationModel.updateReservation);

// router.delete('/:id', reservationModel.deleteReservation);

// router.get('/user/me', auth.verifyToken, reservationModel.getUserReservations);



// module.exports = router;

const router = require('express').Router();
const bookingModel = require('../Models/bookingModel') // Byt ut "reservationModel" till "bookingModel"
const auth = require('../Authentication/auth')

router.post('/', bookingModel.createNewBooking); // Byt ut "reservationModel.createNewReservation" till "bookingModel.createNewBooking"

router.get('/', bookingModel.getBookings); // Byt ut "reservationModel.getReservations" till "bookingModel.getBookings"

router.get('/:id', bookingModel.getBookingById); // Byt ut "reservationModel.getReservationById" till "bookingModel.getBookingById"

router.put('/:id', bookingModel.updateBooking); // Byt ut "reservationModel.updateReservation" till "bookingModel.updateBooking"

router.delete('/:id', bookingModel.deleteBooking); // Byt ut "reservationModel.deleteReservation" till "bookingModel.deleteBooking"

router.get('/user/me', auth.verifyToken, bookingModel.getUserBookings); // Byt ut "reservationModel.getUserReservations" till "bookingModel.getUserBookings"

module.exports = router;
