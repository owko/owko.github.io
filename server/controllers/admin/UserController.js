const UserService = require("../../services/admin/UserService")
const JWT = require("../../util/JWT")
const UserController = {
    login: async (req, res) => {
        //req.body
        var result = await UserService.login(req.body)
        if (result.length === 0) {
            res.send({
                code: "-1",
                error: "用户名或密码错误"
            })
        } else {
            const token = JWT.generate({
                password: result[0].password,
                username: result[0].username
            }, "3000s")
            res.header("Authorization", token)
            res.send({
                ActionType: "OK",
                code:200,
                authorization: token,
            })
        }
    },
    register: async (req, res) => {
        //req.body
        var result = await UserService.register(req.body, res)
        console.log(result)
        if (!result) {
            res.send({
                code: "-1",
                error: "用户名已经被注册"
            })
        }else{
            res.send({
                code: "1",
                success: "成功注册"
            })
        } 
    }
}
module.exports = UserController;