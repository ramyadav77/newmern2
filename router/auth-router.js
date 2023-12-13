const express=require('express');
// const { register } = require('../controllers/auth-controller');
  const authcontroller=require('../controllers/auth-controller');
const validate = require('../middlewares/validate-middleware');
const signupSchema = require('../validators/auth-validator');
const router=express.Router();

router.route("/").get((req,res)=>{
    res.status(200).send(" naye tarike se routing ")
});

// router.route('/register').post(authcontroller.register);
router.route('/register').post(validate(signupSchema), authcontroller.register);

router.route('/login').post(authcontroller.login);

module.exports =router;