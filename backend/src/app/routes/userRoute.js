const express = require('express');
const router = express.Router()
import userController from '../controllers/UserController'

router.post('/signup', userController.signup)
router.post('/signin', userController.signin)
// router.patch('/changePassword', userController.changePassword)

export default router