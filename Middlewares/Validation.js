const xss = require("xss")
exports.Sanitaze = (req, res, next) => {
    const fields = ['title','description','completed']
    for(i in fields) {
        if(req.body[fields[i]]) {
            req.body[fields[i]] = xss(req.body[fields[i]])
        }
    }
    next()
}