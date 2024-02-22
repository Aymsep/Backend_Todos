const express = require('express')
const server = express()
const todosRouter = require('./Routes/Todos.routes')
const userRouter = require('./Routes/User.routes')
const {server:serverConfig} = require('./Config/config')
const cookieParser = require('cookie-parser')
require('dotenv').config()

server.use(cookieParser())
server.use(express.json())
server.use(express.urlencoded({extended:true}))
// server.set('view engine',serverConfig.view_engine)
server.set('view engine','ejs')
server.use(express.static(__dirname + "/public")); 





server.use('/',todosRouter)
server.use('/user',userRouter)








server.listen(serverConfig.PORT,()=>{
    console.log(`Server is running on port ${serverConfig.PORT}`)
})