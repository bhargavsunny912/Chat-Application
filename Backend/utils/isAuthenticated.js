import jwt from 'jsonwebtoken';
import {toast} from 'react-toastify';

const isAuthenticated=async(req,res,next)=>{
    try{
        const Token=req.cookies.token;
        if(!Token){
            return res.status(401).json({message:"User is not authenticated"});
            toast.error("User is not authenticated");

        }
        const decode=await jwt.verify(Token,process.env.JWT_TOKEN);
        if(!decode){
            return res.status(401).json({message:"Invalid token"});
        }
        req.id=decode.userId;
        next();
    }
    catch(e){
        console.log(e);
    }
};

export default isAuthenticated;
