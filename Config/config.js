module.exports = {
    server:{
        PORT: process.env.PORT || 3000,
        BASE_URL: process.env.BASE_URL || `http://localhost:${this.PORT}/`,
        view_engine:'ejs',
        jwtSecrteKey:process.env.jwtKey
    }
}