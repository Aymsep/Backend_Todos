const { axiosGetSingleTodo } = require("../Api/Todos.Api")



const Todo = {
    getSingleTodo:async(id) => {
        return await axiosGetSingleTodo(id)
    }
}

module.exports = Todo