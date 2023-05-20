import user from './user'
import auth from './auth'
import admin from './admin'
import product from './product'
import order from './order'
import orderItem from './orderItem'

// import express from 'express'

// let router = express.Router()

import { interalServerError, notFound } from '../middlewares/handle_errors'

const initRoutes = (app) =>{
    app.use('/api/v1/user', user)
    app.use('/api/v1/auth', auth)
    app.use('/api/v1/admin', admin)
    app.use('/api/v1/product', product)
    app.use('/api/v1/order', order)
    app.use('/api/v1/orderItem', orderItem)
    return app.use('/', notFound)
}

export default initRoutes