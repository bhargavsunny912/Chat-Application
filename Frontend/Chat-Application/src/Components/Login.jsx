import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAuthuser } from "../Redux/Authslice.js";
import {toast} from 'react-toastify';

function Login(){

    const [user,setuser]=useState({
        username:"",
        password:"",
    });

    const navigate=useNavigate();
    const dispatch=useDispatch();

    const formhandler=async(e)=>{
        e.preventDefault();
        try{
            const result=await axios.post("http://localhost:3000/user/login",user,{
                headers:{
                    'Content-Type':'application/json'
                },
                withCredentials:true
            })
            navigate('/');
            toast.success(`${ user.username }  , LoggedIn successfully`);
            dispatch(setAuthuser(result.data));
        }
        catch(e){
            console.log(e);
        }
        setuser({username:"",password:""});
    }

    return (
        <div>
        <div className="flex justify-center items-center h-screen">
            <div className="p-6 w-96 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
                <h1 className="text-center text-3xl text-white font-semibold">Login</h1>
                <form onSubmit={formhandler}>

                    <label className="label" htmlFor="username">User Name</label>
                    <input value={user.username} onChange={(e)=>setuser({...user,username:e.target.value})} className="input bg-white rounded-md text-black h-8 w-full " type="text" id="username" required/>

                    <label className="label" htmlFor="password">Password</label>
                    <input value={user.password} onChange={(e)=>setuser({...user,password:e.target.value})} className="input bg-white rounded-md text-black h-8 w-full " type="password" id="password" required/>

                    <div>
                        <h1 className="my-4 text-center">Account do not exists  ? 
                            <span className="text-blue-600 mx-2"><Link to='/signup'>SignUp</Link></span>
                        </h1>
                    </div>
                    <button className="w-full text-lg rounded-md text-black bg-white h-10 btn hover:text-white"> Login </button>
                </form>
            </div>
        </div>
    </div>
    );
}
export default Login