var express = require('express');
const UserController = require("../../controllers/admin/UserController")
var UserRouter = express.Router();

UserRouter.post("/adminapi/user/login",UserController.login)
UserRouter.post("/adminapi/user/register",UserController.register)

module.exports = UserRouter;
