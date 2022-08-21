const userSchema = require("../models/userSchema")

function sendError(res, message) {
    return res.send({error: true, message})
}

module.exports = {
    validateRegister: (req, res, next) => {
        const {username, passwordOne, passwordTwo} = req.body

        if (username.length <= 4) return res.send({error: true, message: "username is too short, at least 5 letters"})
        if (passwordOne !== passwordTwo) return res.send({error: true, message: "passwords do not match"})
        // const isContainsUppercase = /^(?=.*[A-Z])/;
        // if (!isContainsUppercase.test(username.value)) {
        //     return res.send({error: true, message: "Username must have at least one Uppercase Character."});
        // }
        // if (username !== username.test(/(?=.*[A-Z])/)) {
        //     return res.send({error: true, message: "Username must have at least one Uppercase Character."})
        // }

        next()
    },
    validateUserExist: async (req, res, next) => {
        const user = await userSchema.findOne({username: req.body.username})

        if (user) return res.send({error: true, message: "username already exist"})

        next()
    },

}