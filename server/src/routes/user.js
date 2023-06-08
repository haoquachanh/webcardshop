import * as controllers from '../controllers/userController'
import express from 'express'
const router = express.Router()

router.get('/get', controllers.getCurrent) 
   


module.exports = router