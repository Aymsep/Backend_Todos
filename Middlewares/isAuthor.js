const { getSingleTodo } = require("../Helpers/todoQuery")

exports.isAuthor = async(req, res, next) => {
    const {authorId} = req.user
    const {id} = req.params
    const todo = await getSingleTodo(id)
    if(!todo) return res.status(302).redirect('/')
    if(todo.data.authorId !== authorId) return res.status(302).redirect('/')
    next()
}