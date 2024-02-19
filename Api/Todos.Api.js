const axios = require('axios')
const {server} = require('../Config/config')


const api = axios.create({
    baseURL:`http://localhost:8000/todos`,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json'
    }
})



exports.axiosGetTodos = async () => {
    return api.get('/')
}

exports.axiosDeleteTodos = async (id) => {
    return api.delete(`/${id}`)
}

exports.axiosCreateTodos = async (data) => {
    return api.post('/',data)
}

exports.axiosUpdateTodos = async (id,data) => {
    return api.patch(`/${id}`,data)
}

exports.axiosGetSingleTodo = async (id) => {
    return api.get(`/${id}`)
}