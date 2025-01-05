import { User } from "../Models/Usermodel.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register= async (req,res)=>{
   try{
    const {fullname,username,password,confirmpassword,gender}=req.body;

    if(!fullname || !username || !password || !gender || !confirmpassword){
        return res.status(400).json({message:"All feilds should be filled"});
    }
    if(password !== confirmpassword){
        return res.status(400).json({message:"incorrect password"});
    }
    const user=await User.findOne({username});
    if(user){
        return res.status(400).json({message:'username already exists'});
    }
    const hashedpassword=await bcrypt.hash(password,10);

    const malephoto='https://avatar.iran.liara.run/public/boy';
    const femalephoto='https://avatar.iran.liara.run/public/girl';

    await User.create({
        fullname,
        username,
        password:hashedpassword,
        gender,
        profilephoto: gender === "male"? malephoto : femalephoto ,
    })
    return res.status(200).json({
        message:"account created successfully",
        activate:true
    })
   }
   catch(e){
        console.log(e);
   }
};

export const login=async (req,res)=>{
   try{
    const {username,password}=req.body;
    
    if(!username || !password){
        return res.status(400).json({message:"All feilds required"});
    }

    const user=await User.findOne({username});
    if(!user){
        return res.status(400).json({message:"username/password doesn't exists"});
    }

    const ispassword=await bcrypt.compare(password,user.password);
    if(!ispassword){
        return res.status(400).json({message:"incorrect password"})
    }

    const tokendata={
        userId:user._id
    }

    const token=await jwt.sign(tokendata,process.env.JWT_TOKEN,{expiresIn:'1d'})

    return res.status(200).cookie("token",token,{maxAge:2*24*60*60*1000,httpOnly:true})
    .json({
        _id:user._id,
        username:user.username,
        fullname:user.fullname,
        profilephoto:user.profilephoto
    })

   }
   catch(e){
    console.log(e);
   }
};

export const logout=(req,res)=>{
    try{
        res.status(200).cookie("token","",{maxAge:0})
        .json({
            message:"Logged out successfull"
        })
    }
    catch(e){
        console.log(e);
    }
};

export const otherUsers=async(req,res)=>{
    try{
        const LoggedInUser=req.id;
        const otherusers=await User.find({_id:{$ne:LoggedInUser}}).select("-password");
        return res.status(200).json(otherusers);
    }
    catch(e){
        console.log(e);
    }
}