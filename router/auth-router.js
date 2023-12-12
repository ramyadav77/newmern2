const express=require('express');
// const { register } = require('../controllers/auth-controller');
  const authcontroller=require('../controllers/auth-controller');
const router=express.Router();



router.route("/").get((req,res)=>{
    res.status(200).send(" naye tarike se routing ")
});

router.route('/register').post(authcontroller.register);

module.exports =router;