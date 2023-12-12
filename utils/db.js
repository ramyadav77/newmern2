const mongoose=require("mongoose");

const URI=process.env.MONGO_URL;
// const URI="mongodb+srv://rampraveshyadav30122000:password@cluster0.znxippq.mongodb.net/?retryWrites=true&w=majority"
//mongoose.connect(URI);

const connectDb=async()=>{
    try {
        await mongoose.connect(URI);
        console.log("database connection successfully")
    } catch (error) {
    console.log("database connection failed");
    process.exit(0);

    }
}

module.exports=connectDb;