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
const { isAuthenticated } = require('../Middlewares/isAuthenticated')
const { isAuthor } = require('../Middlewares/isAuthor')


router.get('/',GetAllTodo) //render all todos
router.get('/delete/:id',DeleteTodo) //delete todo
router.post('/',Sanitaze,Validate,CreateTodo) // create todo

router.get('/view/:id',GetSingleTodo) // get todo



router.post('/update/:id',Sanitaze,Validate,isAuthenticated,isAuthor,UpdateTodo) // update todo
router.get('/update/:id',isAuthenticated,isAuthor,renderEdit) // update todo



router.get('/add',isAuthenticated,RenderTodo) // add todo
router.post('/add',Sanitaze,Validate,isAuthenticated,AddTodo) // add todo








module.exports = router