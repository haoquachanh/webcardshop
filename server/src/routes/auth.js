import * as Controllers from '../controllers/authController'
import passport from 'passport'
import express from 'express'
require('dotenv').config();

const router = express.Router()

router.post('/register', Controllers.register)
router.post('/login', Controllers.login)
router.post('/refresh-token', Controllers.refreshTokenController)


router.get('/google',
  passport.authenticate('google', { scope: ['profile','email'], session: false}));

router.get('/google/callback', (req,res,next)=>{
  passport.authenticate('google', (err,profile) => {
    req.user=profile
    console.log(profile)
    next()
  })(req, res, next)
  },(req,res)=>{
    // res.redirect(`/`)
    res.redirect(`${process.env.CLIENT_URL}login-success/${req.user?.userId}`)
  })

router.post('login-success',Controllers.login_success)
module.exports=router