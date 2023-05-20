import * as Services from "../services/productService"
import { interalServerError, badRequest } from "../middlewares/handle_errors"
import { title, image, category_code, price, available, bid, bids, filename, description } from "../helpers/joi_schema"
import joi from 'joi'
const cloudinary = require('cloudinary').v2;

export const getProducts = async (req, res) => {
    try {
        const response = await Services.getProducts(req.query)
        return res.status(200).json(response)

    } catch (error) {
        return interalServerError(res)
    }
}

export const getAllProducts = () => new Promise(async (resolve, reject) => {
    try {
        const products = await db.Product.findAll({
            include: [
                { model: db.Size, as: 'size' },
                { model: db.Type, as: 'type' },
                { model: db.Material, as: 'material' },
                { model: db.Comment, as: 'comments' },
                { model: db.OrderItem, as: 'orderItems' },
                
            ]
        });

        resolve({
            err: 0,
            products
        });
    } catch (error) {
        reject(error);
    }
});


export const getOneProduct = (productId) => new Promise(async (resolve, reject) => {
    try {
        const product = await db.Product.findByPk(productId, {
            include: [
                { model: db.Size, as: 'size' },
                { model: db.Type, as: 'type' },
                { model: db.Material, as: 'material' },
                { model: db.Comment, as: 'comments' },
                { model: db.OrderItem, as: 'orderItems' }
            ]
        });

        if (product) {
            resolve({
                err: 0,
                product
            });
        } else {
            resolve({
                err: 1,
                mes: 'Product not found'
            });
        }
    } catch (error) {
        reject(error);
    }
});





// CREATE
export const createNewProduct = async (req, res) => {
    try {
        const fileData = req.file
        const { error } = joi.object({ image }).validate({ ...req.body, image: fileData?.path })
        if (error) {
            if (fileData) cloudinary.uploader.destroy(fileData.filename)
            return badRequest(error.details[0].message, res)
        }
        const response = await Services.createNewProduct(req.body, fileData)
        return res.status(200).json(response)

    } catch (error) {
        return interalServerError(res)
    }
}
// UPDATE
export const updateProduct = async (req, res) => {
    try {
        const fileData = req.file
        const { error } = joi.object({ bid }).validate({ bid: req.body.bid })
        if (error) {
            if (fileData) cloudinary.uploader.destroy(fileData.filename)
            return badRequest(error.details[0].message, res)
        }
        const response = await Services.updateProduct(req.body, fileData)
        return res.status(200).json(response)

    } catch (error) {
        return interalServerError(res)
    }
}
// DELETE
export const deleteProduct = async (req, res) => {
    try {
        const { error } = joi.object({ productId, filename }).validate(req.query)
        if (error) {
            return badRequest(error.details[0].message, res)
        }
        const response = await Services.deleteProduct(req.query.bids, req.query.filename)
        return res.status(200).json(response)

    } catch (error) {
        return interalServerError(res)
    }
}