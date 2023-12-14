 require('dotenv').config();
 const express=require('express');
const authRoute = require('./router/auth-router');
const contactRoute=require("./router/contact-router");
const connectDb = require('./utils/db');
const errorMiddleware = require('./middlewares/error-middleware');

 const app=express();

//middleware
app.use(express.json());

app.use("/api/auth",authRoute);
app.use("/api/form",contactRoute);



app.use(errorMiddleware);

const PORT=5000;
//db connection

connectDb().then(()=>{
   
 app.listen(PORT,()=>{
    console.log(`server is running on port :${PORT}`)
 });

});
 

 