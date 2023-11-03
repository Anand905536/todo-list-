const express=require("express")
const router=express.Router()

const authController=require('../controllers/authControllers')
const userController=require('../controllers/userController')

router.post('/login',authController.login)
router.post('/register',authController.register)
router.post('/add-task',userController.addTask)
router.post('/get-task',userController.getTask)
router.post('/delete-task',userController.deleteTask)
router.post('/edit-task',userController.editTask)



module.exports=router