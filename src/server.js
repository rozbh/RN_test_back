const http = require('http')
const app = require('./app')
const server = http.createServer(app)
require('dotenv').config()
server.listen(process.env.PORT, () => {
    console.log(`hi im run on ${process.env.PORT}`);
})
