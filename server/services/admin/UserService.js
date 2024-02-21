const UserModel = require('../../models/UserModel');
const UserService = {
    login: async ({ username, password }) => {
        return UserModel.find({ username, password })
    },
    register: async ({ username, password }, res) => {
        if (UserModel.find({ username, password })!==[]) {
            return false
        } else {
            // 保存到数据库
            UserModel.create({
                username,
                password
            })
            return true
        }
    }
}
module.exports = UserService;