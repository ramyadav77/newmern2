const User = require("../models/user-model");
const bcrypt=require('bcrypt');

const register=async (req,res)=>{
    try {
        // console.log(req.body)
         const{username,email,phone,password}=req.body;
         const userExists=await User.findOne({email});
         if (userExists){
            return res.status(400).json({msg:"user already exists"})
         }
         const data=await User.create({username,email,phone,password})
        res.status(200).json({msg:"registratin succesful ",token:await data.generateToken(),userId:data._id.toString()})
    } catch (error) {
        //error middleware ko lagaye h 
        // res.status(500).send({msg:"internal server error"})
        next()
    }
}

//login
const login=async(req,res)=>{
    try {
        const{email,password}=req.body;
        const userExist=await User.findOne({email});
        if(!userExist){
            return res.status(400).json({msg:"invalid credential"})
        }
        // const user=await bcrypt.compare(password,userExist.password);
        const user=await userExist.comparePassword(password);
        if(user){
            res.status(200).json({
                msg:"login succesfully",
                token:await userExist.generateToken(),
                userId:userExist._id.toString()
            })
        }else{
            res.status(401).json({msg:"invalid dono email or pass"})
        }
    } catch (error) {
        //error.message se actual error dekh sakte h
        res.status(500).json(error.message)    
    }
}



module.exports={register,login};