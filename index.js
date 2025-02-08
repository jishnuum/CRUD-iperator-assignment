const express = require("express")
const { userroute } = require("./routes/userroutes")
const app = express()



app.use(express.json())

app.use("/user",userroute)









app.listen(3000,()=>{
    console.log("server start port 3000");
    
})