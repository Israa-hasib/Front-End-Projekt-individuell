const router = require('express').Router();
const bookingModel = require('../models/bookingModel') 
const auth = require('../auth/auth')

router.post('/', bookingModel.createNewBooking); 

router.get('/', bookingModel.getBookings); 

router.get('/:id', bookingModel.getBookingById); 

router.put('/:id', bookingModel.updateBooking);

router.delete('/:id', bookingModel.deleteBooking); 

router.get('/user/me', auth.verifyToken, bookingModel.getUserBookings); 

module.exports = router;
