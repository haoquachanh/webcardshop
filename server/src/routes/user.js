



// http://localhost:3001/api/v1/user

import * as controllers from '../controllers/userController'
import express from 'express'
import verifyToken from '../middlewares/verify_token'

const router = express.Router()

// PUBLIC ROUTES


// PRIVATE ROUTES
router.use(verifyToken)
router.get('/get-current', controllers.getCurrent)


module.exports = router
