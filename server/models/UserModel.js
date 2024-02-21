const mongoose = require("mongoose")
const Schema = mongoose.Schema
const UserType = {
    username: {
        type: String,
        unique:true //字段是否唯一
    },
    password: String,
    gender:Number,
    avatar:String,
}
const UserModel = mongoose.model("user", new Schema(UserType))
module.exports = UserModel