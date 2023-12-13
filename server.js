 require('dotenv').config();
 const express=require('express');
const router = require('./router/auth-router');
const connectDb = require('./utils/db');
const errorMiddleware = require('./middlewares/error-middleware');

 const app=express();

//middleware
app.use(express.json());

app.use("/api/auth",router)


app.use(errorMiddleware);

const PORT=5000;
//db connection

connectDb().then(()=>{
   
 app.listen(PORT,()=>{
    console.log(`server is running on port :${PORT}`)
 });

});
 

 