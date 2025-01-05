import mongoose from "mongoose";

const connectdatabase=async()=>{
    await mongoose.connect(process.env.MONGO_URL)
    .then((s)=>{console.log("Database established")})
    .catch((e)=>{console.log("error")});
}

export default connectdatabase;