import db from '../models'
import { Op } from 'sequelize'
const cloudinary = require('cloudinary').v2;


// READ
export const getProducts = ({ page, limit, order, name, available, ...query }) => new Promise(async (resolve, reject) => {
    try {
        const queries = { raw: true, nest: true }
        const offset = (!page || +page <= 1) ? 0 : (+page - 1)
        const fLimit = +limit || +process.env.LIMIT_BOOK
        queries.offset = offset * fLimit
        queries.limit = fLimit
        if (order) queries.order = [order]
        if (name) query.title = { [Op.substring]: name }
        if (available) query.available = { [Op.between]: available }
        const response = await db.Product.findAndCountAll({
            where: query,
            ...queries,
            attributes: {
                exclude: ['category_code', 'description']
            },
            include: [
                { model: db.Category, attributes: { exclude: ['createdAt', 'updatedAt'] }, as: 'categoryData' }
            ]
        })
        resolve({
            err: response ? 0 : 1,
            mes: response ? 'Got' : 'Cannot found product',
            bookData: response
        })
    } catch (error) {
        reject(error)
    }
})


export const getAllProducts = () => new Promise(async (resolve, reject) => {
    try {
        const products = await db.Product.findAll({
            include: [
                { model: db.Size, as: 'size' },
                { model: db.Effect, as: 'effect' },
                { model: db.Material, as: 'material' },
                { model: db.Comment, as: 'comments' },
                { model: db.OrderItem, as: 'orderItems' }
            ]
        });

        const formattedProducts = products.map(product => {
            const { image, ...rest } = product.toJSON();
            return {
                ...rest,
                image
            };
        });

        resolve({
            err: 0,
            products: formattedProducts
        });
    } catch (error) {
        reject(error);
    }
});

// CREATE
export const createNewProduct = (body, fileData) => new Promise(async (resolve, reject) => {
    try {

        const response = await db.Product.create({
            status: 'active',
            sizeId: body?.sizeId,
            typeId: body?.typeId,
            materialId: body?.materialId,

        });

        if (fileData) {
            response.image = fileData.path;
            response.filename = fileData.filename;
            await response.save();
        }

        resolve({
            err: 0,
            mes: 'Created',
        });

        if (fileData && !response) {
            cloudinary.uploader.destroy(fileData.filename);
        }
    } catch (error) {
        reject(error);

        if (fileData) {
            cloudinary.uploader.destroy(fileData.filename);
        }
    }
});

// UPDATE
export const updateProduct = ({ bid, ...body }, fileData) => new Promise(async (resolve, reject) => {
    try {
        if (fileData) {
            body.image = fileData.path;
        }

        const [rowsAffected] = await db.Product.update(body, {
            where: { productId: bid }
        });

        resolve({
            err: rowsAffected > 0 ? 0 : 1,
            mes: rowsAffected > 0 ? `${rowsAffected} product updated` : 'Cannot update product/ Product ID not found',
        });

        if (fileData && rowsAffected === 0) {
            cloudinary.uploader.destroy(fileData.filename);
        }
    } catch (error) {
        reject(error);

        if (fileData) {
            cloudinary.uploader.destroy(fileData.filename);
        }
    }
});

export const deleteProduct = (bids, filename) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Product.destroy({
            where: { productId: bids }
        });

        resolve({
            err: response > 0 ? 0 : 1,
            mes: `${response} product(s) deleted`
        });

        if (filename) {
            cloudinary.uploader.destroy(filename);
        }
    } catch (error) {
        reject(error);
    }
});
