const register=async (req,res)=>{

    try {
        console.log(req.body)
        res.status(200).send({msg:req.body})
    } catch (error) {
        res.status(400).send({msg:"page not found"})
    }
}



module.exports={register};