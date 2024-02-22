const express = require('express');
const router = express.Router();

const {renderLogin,renderRegister,registerUser, loginUser, renderProfile} = require('../Controllers/User.Controllers');
const { isAuthenticated } = require('../Middlewares/isAuthenticated');
const { avoidAuth } = require('../Middlewares/avoidAuth');







router.route('/login')
.all(avoidAuth)
.get(renderLogin)
.post(loginUser)

router.route('/register')
.all(avoidAuth)
.get(renderRegister)
.post(registerUser)

router.route('/profile')
.get(isAuthenticated,renderProfile)


module.exports = router;