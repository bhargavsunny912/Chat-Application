import { useState } from "react";
import { IoSend } from "react-icons/io5";
import axios from 'axios';
import {useSelector,useDispatch} from 'react-redux';
import { setmessages } from "../Redux/MessageSlice";

const Sendmsg=()=>{

    const [message,setmsg]=useState("");
    const dispatch=useDispatch();
    const selectedUser=useSelector((state)=>state.Auth.selecteduser);
    const messages=useSelector((state)=>state.Messages.msg);

    const submithandler=async(e)=>{
        e.preventDefault();
        try{
            const result=await axios.post(`http://localhost:3000/message/send/${selectedUser._id}`,{message},{
                headers:{
                    "Content-Type":"application/json"
                },
                withCredentials:true,
            })
            console.log(result);
            dispatch(setmessages([...messages,result?.data?.newMessage]));
        }
        catch(e){
            console.log(e);
        }
        setmsg("");
    }

    return (
        <form onSubmit={submithandler} className="relative">
            <input value={message} onChange={(e)=>setmsg(e.target.value)} className="bg-white outline-none h-12 m-2 w-[97%] text-black p-2 rounded-md" type="text" placeholder="send message ..."/>
            <button type="submit" className="absolute flex inset-y-0 end-0 text-2xl py-5 px-8 text-black"><IoSend /></button>
        </form>
    );
}
export default Sendmsg;