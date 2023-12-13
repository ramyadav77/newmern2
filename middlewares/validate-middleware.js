const validate=(schema)=>async(req,res,next)=>{
try {
    const parseBody=await schema.parseAsync(req.body);
    req.body=parseBody;
    next();
} catch (err) {
    // console.log(error);
    const status=422;
    const message='fill in input properly'
    const extraDetails=err.errors[0].message;

    const error={
        status,
        message,
        extraDetails,
    }

    console.log(error);
    // errror middleware k liye kuchh hua h 
    // res.status(400).json({msg:message});
    next(error);
}
};
module.exports=validate;