import db from '../models'


export const getOne = (userId) => new Promise(async (resolve, reject) => {
    try {
        console.log(userId)
        const response = await db.User.findOne({
            where: { userId: userId },
            attributes: {
                exclude: ['password', 'roleId', 'refresh_token','status']
            }
            // include: [
            //     { model: db.Role, as: 'roleData', attributes: ['id', 'name', 'description'] }
            // ]
        })
        resolve({
            err: response ? 0 : 1,
            mes: response ? 'Got' : 'User not found',
            userData: response
        })
    } catch (error) {
        reject(error)
    }
})

