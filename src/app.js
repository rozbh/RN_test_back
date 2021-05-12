const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
const GetUserData = require('./routes/GetUserData.route')
app.use(GetUserData)
module.exports = app