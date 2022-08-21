const express = require("express")
const router = express.Router()
const {registerUser,
    login,
    getAllUsers,
    getSingleUser,
    uploadItem,
    getItem,
} = require("../controllers/mainController")
const {validateRegister, validateUserExist} = require("../middleware/validators")

router.post('/registerUser', validateRegister, validateUserExist, registerUser)
router.post('/login', login)
router.get("/allUsers", getAllUsers)
router.get("/singleUser/:id", getSingleUser)
router.post("/uploadItem", uploadItem)
router.get("/item", getItem)

module.exports = router