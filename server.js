const express = require('express')
const server = express()
const todosRouter = require('./Routes/Todos.routes')
const {server:serverConfig} = require('./Config/config')


server.use(express.json())
server.use(express.urlencoded({extended:true}))
// server.set('view engine',serverConfig.view_engine)
server.set('view engine','ejs')





server.use('/',todosRouter)









server.listen(serverConfig.PORT,()=>{
    console.log(`Server is running on port ${serverConfig.PORT}`)
})