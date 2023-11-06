const router = require('express').Router()
const userModel = require('../models/userModel')
const auth = require('../auth/auth')

// Register a new user
router.post('/register', userModel.registerUser);

router.post('/login', userModel.loginUserWithEmailAndPassword);

router.get('/me', auth.verifyToken, userModel.getUserData);

router.get('/', userModel.getAllUsers);

// router.get('/:id', userModel.getUserById);

// router.post('/', userModel.createNewUser);



module.exports = router