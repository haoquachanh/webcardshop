import * as controllers from '../controllers/productController'
import express from 'express'
import verifyToken from '../middlewares/verify_token'
import {isAdmin} from '../middlewares/verify_roles'
import uploadCloud from '../middlewares/uploader'

const router = express.Router()

// PUBLIC ROUTES
router.get('/all', controllers.getAllProducts)


// PRIVATE ROUTES
// router.use(verifyToken)
// router.use(isAdmin)
router.post('/', uploadCloud.single('image'), controllers.createNewProduct)
router.put('/', uploadCloud.single('image'), controllers.updateProduct)
router.delete('/', controllers.deleteProduct)


module.exports = router