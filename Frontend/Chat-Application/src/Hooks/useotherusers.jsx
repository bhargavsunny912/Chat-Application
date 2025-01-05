import { useEffect } from "react";
import axios from 'axios';
import {useDispatch} from 'react-redux';
import { setOtherusers } from "../Redux/Authslice";

function useOtherusers(){

    const dispatch=useDispatch();

    useEffect(()=>{
        const getotherusers=async ()=>{
            try{
                axios.defaults.withCredentials=true;
                const result=await axios.get('http://localhost:3000/user/');
                dispatch(setOtherusers(result.data));
            }
            catch(e){
                console.log(e);
            }
        }
        getotherusers();
        
    },[])
}
export default useOtherusers;