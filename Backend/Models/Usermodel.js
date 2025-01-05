import mongoose, { mongo } from 'mongoose';

const Usermodel=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    fullname:{
        type:String,
        required:true
    },
    profilephoto:{
        type:String,
        default:""
    },
    gender:{
        type:String,
        enum:['male','female'],
        required:true
    }
},{timestamps:true});

export const User=mongoose.model("User",Usermodel);

