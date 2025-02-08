const express = require('express')
const { getuser, createuser, deleteuser, updateuser } = require('../controllers/usercontroler')
const uservalidation = require('../middlewares/uservalidationmw')

const userroute = express.Router()


userroute.get("/readingdata",getuser)

userroute.post("/creatingdata" ,uservalidation,createuser)

userroute.put("/updatingdata/:userid",updateuser)

userroute.delete("/deletingdata/:id",deleteuser)

module.exports = {userroute}

