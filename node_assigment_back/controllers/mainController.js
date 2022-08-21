const userSchema = require("../models/userSchema")
const itemSchema = require("../models/itemSchema")
const nid = require("nid")

module.exports = {
    registerUser: async (req, res) => {
        const {username, passwordOne: password} = req.body

        const user = new userSchema()
            user.username = username,
            user.password = password,
            user.id = nid(),
            user.photo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmx25SfhJmaZC3ZkQkpMd_WULs3RrQCvy1n_rrue48WApWqeBrRIeSotrwUZicrsnjjPw&usqp=CAU"

        try {
            await user.save()
        } catch (e) {
            console.log('got error')
        }

        res.send({error: false})
    },
    login: async (req, res) => {
        const {username, password} = req.body

        const user = await userSchema.findOne({username, password, nid})
        console.log(user)
        // if (user) return res.send({error: false, user})
        // console.log(user)

        res.send({error: false, message: "user does not exist"})
    },
    getAllUsers: async (req, res) => {
        const users = await userSchema.find()

        res.send({error: false, message: users})
    },
    getSingleUser: async (req, res) => {
        const {id} = req.params
        const user = await userSchema.findById({_id: id})
        res.send({error: false, user})
    },
    uploadItem: async (req, res) => {
        const {image} = req.body

        const item = new itemSchema()
            item.image = image

        try {
            await item.save()
        } catch (e) {
            console.log('got error')
        }
        res.send({error: false})
    },
    getItem: async (req, res) => {
        const item = await itemSchema.find()

        res.send({error: false, message: item})
    }
}