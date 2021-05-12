const axios = require('axios')
module.exports = async (req, res) => {
    const url = new URL('https://jsonplaceholder.typicode.com/users')
    try {
        const Page = req.params.page ?? 0
        const limit = req.params.limit ?? 0
        const { data } = await axios.get(url.href)
        const Response = {}
        const temp = []
        const End = ((Page * limit) + limit)
        const len = End > data.length ? data.length : End
        for (let index = Page * limit; index < len; index++) {
            const { name, username ,id} = data[index]
            temp.push({ name, username,id })
        }
        Response.UserData = temp
        Response.page = Page
        Response.limit = limit
        Response.Pages = Math.floor(data.length / limit)
        return res.send(Response);
    } catch (error) {
        return res.status(500).send('err something happend!!!');
    }
}