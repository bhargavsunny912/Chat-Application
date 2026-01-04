import mongoose from "mongoose";

const connectdatabase=async()=>{

    let url=process.env.MONGO_URL;

    await mongoose.connect(url)
    .then((s)=>{console.log("Database established")})
    .catch((e)=>{console.log("error")});
}

export default connectdatabase;