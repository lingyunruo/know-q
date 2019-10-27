
// 用户数据表
module.exports = {
    // 用户名字
    userName: {
        type: String,
        required: true
    },
    // 用户登录ID
    userId: {
        type: String,
        required: true
    },
    // 用户密码
    password: {
        type: String,
        required: true
    },
    // 登录状态
    isLogin: {
        type: Boolean,
        default: false
    }
}