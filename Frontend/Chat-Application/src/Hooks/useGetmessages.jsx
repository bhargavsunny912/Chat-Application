import { useEffect } from "react";
import axios from 'axios';
import {useSelector,useDispatch} from 'react-redux';
import { setmessages } from "../Redux/MessageSlice";

function useGetmessages(){

    const SelectedUser=useSelector((state)=>state.Auth.selecteduser);
    const dispatch=useDispatch();

    useEffect(()=>{
        const getMessages=async ()=>{
            try{
                axios.defaults.withCredentials=true;
                const result=await axios.get(`http://localhost:3000/message/recieve/${SelectedUser._id}`); 
                dispatch(setmessages(result.data));
            }
            catch(e){
                console.log(e);
            }
        }
        getMessages();
    },[SelectedUser])
}
export default useGetmessages;