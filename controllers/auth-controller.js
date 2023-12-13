const User = require("../models/user-model");


const register=async (req,res)=>{

    try {
        // console.log(req.body)
         const{username,email,phone,password}=req.body;
         const userExists=await User.findOne({email});
         if (userExists){
            return res.status(400).json({msg:"user already exists"})
         }
         const data=await User.create({username,email,phone,password})
        res.status(200).json({msg:"registratin succesful",token:await data.generateToken(),userId:data._id.toString()})
    } catch (error) {
        res.status(500).send({msg:"internal server error"})
    }
}



module.exports={register};