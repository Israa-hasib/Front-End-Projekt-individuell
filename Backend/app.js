const express = require('express');
const app = express();
const cors = require('cors')

// Middleware
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Controllers
app.use('/api/users', require('./Controllers/userController'))
app.use('/api/rooms', require('./Controllers/roomController'))
app.use('/api/bookings', require('./Controllers/bookingController'))

module.exports = app;