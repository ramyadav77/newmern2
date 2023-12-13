const {z}=require('zod');
// creating an object
const signupSchema=z.object({
    username:z
    .string({required_error:"name is required"})
    .trim()
    .min(3,{message:"name must be atleast 3 character"})
    .max(255,{message:"name must not be more than 255 characters"}),
    email:z
    .string({required_error:"email is required"})
    .trim()
    .email({message:"invalid email address"})
    .min(3,{message:"email must be atleast 3 character"})
    .max(255,{message:"email must not be more than 255 characters"}),
    phone:z
    .string({required_error:"phone is required"})
    .trim()
    .min(10,{message:"phone must be atleast 10 character"})
    .max(10,{message:"phone must not be more than 10 characters"}),
    password:z
    .string({required_error:"password is required"})
    .trim()
    .min(7,{message:"password must be atleast 7 character"})
    .max(255,{message:"name must not be more than 255 characters"}),
});

module.exports=signupSchema;
