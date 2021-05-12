module.exports.Page = async (req, res, next) => {
    try {
        if (parseInt(req.params.page)>=0 && parseInt(req.params.limit) >0) {
            return next()
        }
       return res.send('error');;
    } catch (error) {
        console.log(error);
    }
}