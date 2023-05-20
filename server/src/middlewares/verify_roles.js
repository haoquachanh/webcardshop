import { notAuth } from "./handle_errors"

export const isAdmin = (req, res, next) => {
    const { name } = req.user
    if (name !== 'user') return notAuth('Require role Admin', res)
    next()
}
