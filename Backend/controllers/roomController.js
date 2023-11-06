// const router = require('express').Router();
// const accommodationModel = require('../Models/accommodationModel')


// router.post('/', accommodationModel.createNewAccommodation);

// router.get('/', accommodationModel.getAccommodations);

// router.get('/:id', accommodationModel.getAccommodationById);

// router.put('/:id', accommodationModel.updateAccommodation);

// router.delete('/:id', accommodationModel.deleteAccommodation);



// module.exports = router;

const router = require('express').Router();
const roomModel = require('../models/roomModel'); // Byt ut "accommodationModel" till "roomModel"

router.post('/', roomModel.createNewRoom); // Byt ut "accommodationModel.createNewAccommodation" till "roomModel.createNewRoom"

router.get('/', roomModel.getRooms); // Byt ut "accommodationModel.getAccommodations" till "roomModel.getRooms"

router.get('/:id', roomModel.getRoomById); // Byt ut "accommodationModel.getAccommodationById" till "roomModel.getRoomById"

router.put('/:id', roomModel.updateRoom); // Byt ut "accommodationModel.updateAccommodation" till "roomModel.updateRoom"

router.delete('/:id', roomModel.deleteRoom); // Byt ut "accommodationModel.deleteAccommodation" till "roomModel.deleteRoom"

module.exports = router;
