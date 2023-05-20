import db from '../models'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const hashPW = password => bcrypt.hashSync(password, bcrypt.genSaltSync(7))

export const register = (req) => new Promise(async(resolve, reject) => {
    try {
        // console.log("dddddddddddd")
        // console.log(db.User.findOrCreate({
        //     where:  { email:email},
        //     defaults:{
        //         email:email,
        //         password: hashPW(password)
        //     }
        // }))
        
        const response = await db.User.findOrCreate({
            where:  { email:req?.email},
            defaults:{
                email:req?.email,
                password: hashPW(req?.password),
                name: req?.name,
                phone: req?.phone,
                birth: req?.birth
            }
        });
        
        // console.log(response)
        
        let token = response[1]? jwt.sign({userId: response[0].userId, email: response[0].email, roleId: response[0].roleId},process.env.JWT_SECRET, {expiresIn: '1h'}) :null
        resolve({
            err: response[1] ? 0 :1,
            mes: response[1] ? 'Register is successful' : 'Email is used already',
            'access_token': token ? `Bearer ${token}` : token
        })


    } catch (error) {
        reject(error)
    }
});

export const login = ({ email, password }) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.User.findOne({
            where: { email },
            raw: true
        })
        const isChecked = response && bcrypt.compareSync(password, response.password)
        const accessToken = isChecked
            ? jwt.sign({ userId: response.userId, email: response.email }, process.env.JWT_SECRET, { expiresIn: '1000s' })
            : null
        // JWT_SECRET_REFRESH_TOKEN
        const refreshToken = isChecked
            ? jwt.sign({ userId: response.userId }, process.env.JWT_SECRET_REFRESH_TOKEN, { expiresIn: '6000s' })
            : null
        resolve({
            err: accessToken ? 0 : 1,
            mes: accessToken ? 'Login is successfully' : response ? 'Password is wrong' : 'Email has not been registered',
            'access_token': accessToken ? `Bearer ${accessToken}` : accessToken,
            'refresh_token': refreshToken
        })
        if (refreshToken) {
            await db.User.update({
                refresh_token: refreshToken
            }, {
                where: { userId: response.userId }
            })
        }

    } catch (error) {
        reject(error)
    }
})