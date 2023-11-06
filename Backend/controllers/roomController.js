const router = require('express').Router();
const roomModel = require('../models/roomModel'); 

router.post('/', roomModel.createNewRoom); 

router.get('/', roomModel.getRooms);

router.get('/:id', roomModel.getRoomById); 

router.put('/:id', roomModel.updateRoom);

router.delete('/:id', roomModel.deleteRoom); 

module.exports = router;
