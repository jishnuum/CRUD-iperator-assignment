const uservalidation = (req,res,next)=>{
    try {
        const {name,email,age} = req.body
        if(!name || !email || !age){
            res.status(400).json({message:"all fields are requires"})
        }
        next()
        
    } catch (error) {
        res.status(error.code || 500).json({error:error.message || "internal server error"})
    }
}

module.exports = uservalidation