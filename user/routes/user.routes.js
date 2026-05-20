const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middleware/authMiddleWare');
router.post('/register', userController.register);
router.post('/login', userController.login);

router.get('/logout',  userController.logout);
router.get('/profile', authMiddleware.userAuth, userController.profile);
router.get('/accetp-ride', authMiddleware.userAuth, userController.acceptedRide);

module.exports = router;