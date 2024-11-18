import mongoose from "mongoose";


const dbConnect=async()=>{
    try{
     await mongoose.connect(process.env.MONGODB_URL)
     console.log("Connected to MongoDB Successfully");
    }
    catch(error){
    console.log("Error connecting to MongoDB Successfully",error)
    }
        
    }
    
    export default dbConnect;