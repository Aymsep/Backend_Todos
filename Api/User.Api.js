const axios = require('axios'); 
const api = axios.create({
    baseURL:`http://localhost:8000/users`,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json'
    }
})



exports.axiosRegisterUser = async (data) => {
    return api.post('/',data)
}

exports.getAllUsers = async () => {
    return api.get('/')
}

