const express = require('express')
const router = express.Router()

const {
    GetAllTodo,
    DeleteTodo,
    CreateTodo,
    UpdateTodo,
    GetSingleTodo,
    renderEdit,
    AddTodo,
    RenderTodo
} = require('../Controllers/Todos.Controllers')

const {Sanitaze} = require('../Middlewares/Validation')
const {Validate} = require('../Middlewares/Sanitize')


router.get('/',GetAllTodo) //render all todos
router.get('/delete/:id',DeleteTodo) //delete todo
router.post('/',Sanitaze,Validate,CreateTodo) // create todo
router.post('/update/:id',Sanitaze,Validate,UpdateTodo) // update todo
router.get('/update/:id',renderEdit) // update todo
router.get('/view/:id',GetSingleTodo) // get todo
router.get('/add',RenderTodo) // add todo
router.post('/add',Sanitaze,Validate,AddTodo) // add todo









module.exports = router