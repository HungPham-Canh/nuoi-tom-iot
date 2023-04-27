const express = require('express');
const router = express.Router()
import userController from '../controllers/UserController'

router.post('/signup', userController.signup)
router.get('/signin', userController.signin)
router.patch('/changePassword', userController.changePassword)

export default router