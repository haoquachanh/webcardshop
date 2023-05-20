import * as Services from "../services/userService"
import { interalServerError, badRequest } from "../middlewares/handle_errors"
// import { email, password } from "../helpers/joi_schema"
// import joi from 'joi'

export const getCurrent = async (req, res) => {
    try {
        const { userId } = req.user
        console.log(req.user)
        const response = await Services.getOne(userId)
        return res.status(200).json(response)

    } catch (error) {
        return interalServerError(res)
    }
}
