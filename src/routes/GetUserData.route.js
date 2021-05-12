const express = require('express')
const router = express.Router()
const GetUserData=require('../Middleware/GetUserData/GetUserData.middleware')
const Validator=require('../Middleware/GlobalValidator')
router.get('/GetUserData/:page/:limit',Validator.Page,GetUserData)
module.exports = router