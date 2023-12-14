const Contact=require("../models/contact-model");

const contactForm=async(req,res)=>{
    try {
        const response=req.body;
        await Contact.create(response);
        res.status(200).json({msg:"message send successfullu"}); //return lagaya h sir ji n
    } catch (error) {
        res.status(500).json({msg:"msg not deliverd"}) // return lagaya h sir n
    }
};
module.exports=contactForm;