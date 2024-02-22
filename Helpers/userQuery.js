const { getAllUsers } = require("../Api/User.Api");
const { comparePassword } = require("./Hashing");


const User = {
    findUser:async(email) => {
        const users = await getAllUsers();
        return users.data.find(user => user.email === email)
    },
    MatchedPassword:async(password,userPassword) => {
        return comparePassword(password,userPassword)
    }
}



module.exports = User;