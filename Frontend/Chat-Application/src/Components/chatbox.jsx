import { useEffect } from "react";
import Messages from "./messages";
import Sendmsg from "./sendmsg";
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import { setSelecteduser } from "../Redux/Authslice";
import { toast } from "react-toastify";

function Chatbox(){

    const SelectedUser=useSelector((state)=>state.Auth.selecteduser);
    const authUser=useSelector((state)=>state.Auth.authuser);
    const dispatch=useDispatch();
    const navigate=useNavigate();

    useEffect(()=>{
        return ()=>dispatch(setSelecteduser(null));
    },[]);

    if(!authUser){
        navigate('/login');
        toast.warning("You have to login to chat");
    }

    if(!SelectedUser) 
        return (
            <div className="flex gap-6 flex-col items-center justify-center mx-auto text-3xl font-semibold">
                <h1>Hey ,<span className="rounded-md py-2 px-2 mx-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"> {authUser?.fullname}</span></h1>
                <h1>Lets Start Conversation</h1>
            </div>
        );
    return (
        <div className="w-full flex flex-col">
            <div className="p-1 border-b-2">
                <div>
                    <div className=" flex items-center gap-5 ml-3 hover:bg-zinc-500 hover:cursor-pointer rounded-md px-2 py-1">
                        <div className="online avatar h-12 w-12">
                            <img className="rounded-full" src={SelectedUser?.profilephoto} alt="profilephoto" />
                        </div>
                        <h1 className="text-md">{SelectedUser.fullname}</h1>
                    </div>
                </div>
            </div>
            <div className="flex-1 overflow-auto">
                <Messages />
            </div>
            <div>
                <Sendmsg />
            </div>
        </div>
    );
}
export default Chatbox;