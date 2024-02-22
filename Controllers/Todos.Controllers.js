const { 
    axiosGetTodos,
    axiosDeleteTodos,
    axiosCreateTodos,
    axiosUpdateTodos,
    axiosGetSingleTodo
} = require('../Api/Todos.Api')
const fs = require('fs')


exports.GetAllTodo = async(req, res) => {
    try {
        const {data} = await axiosGetTodos()
        if(!data) return res.render('AllTodos',{message: 'Todos not found'})
        res.render('AllTodos',{todos:data})
    } catch (error) {
        console.log(error)
    }
}

exports.DeleteTodo = async(req, res) => {
    try{
        const id = req.params.id
        const result = await axiosDeleteTodos(id)
        if(!result) return res.render('AllTodos',{message: 'Todo not found'})
        res.redirect('/')
    }catch(error) {
        console.log(error)
    }
}

exports.CreateTodo = (req, res) => {

}

exports.UpdateTodo = async(req, res) => {
    try{
        const id = req.params.id
        const {title,description,completed} = req.body
        const result = await axiosUpdateTodos(id,{title,description,completed})
        console.log(result)
        if(!result) return res.send('Todo not found')
        res.status(302).redirect('/')
    }catch(error) {
        console.log(error)
    }

}

exports.renderEdit = async(req, res) => {
    try{
        const id = req.params.id
        const todo = await axiosGetSingleTodo(id)
        if(!todo) return res.render('EditTodos',{message: 'Todo not found'})
        res.render('EditTodos',{todo:todo.data})    
    }catch(error) {
        console.log(error)
    }
}

exports.GetSingleTodo = async(req, res, next) => {
    try{
        const id = req.params.id
        const todo = await axiosGetSingleTodo(id)
        if(!todo) return res.render('SingleTodos',{message: 'Todo not found'})
        res.render('SingleTodos',{todo:todo.data})    
    }catch(error) {
        console.log(error)
    }
}


exports.RenderTodo = (req, res) => {
    res.render('AddTodos')
}

exports.AddTodo = async(req, res) => {
    try{
        const {title,description,completed} = req.body
       const {authorId} = req.user
        const result = await axiosCreateTodos({title,description,completed,authorId})
        if(!result) return res.send('Todo not found')
        res.status(302).redirect('/')
    }catch(error) {
        console.log(error)
    }
}