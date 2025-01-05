import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from 'axios';
import {toast} from "react-toastify";

function Signup(){

    const [user,setuser]=useState({
        fullname:"",
        username:"",
        password:"",
        confirmpassword:"",
        gender:""
    });

    const navigate=useNavigate();

    const formhandler=async(e)=>{
        e.preventDefault();
        try{
            const result=await axios.post("http://localhost:3000/user/register",user,{
                headers:{
                    'Content-Type':'application/json'
                },
                withCredentials:true
            })
            if(result.data.activate){
                navigate('/login');
                toast.success(result.data.message);
            }
        }
        catch(e){
            console.log(e);
        }
        setuser({
            fullname:"",username:"",password:"",confirmpassword:"",gender:""
        });
    }

    const genderhandler=(gender)=>{
        setuser({...user,gender:gender});
    }

    return (
        <div>
            <div className="flex justify-center items-center h-screen">
                <div className="p-6 w-96 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
                    <h1 className="text-center text-3xl text-white font-semibold">SignUp</h1>
                    <form onSubmit={formhandler}>
                        <label className="label" htmlFor="fullname">Full Name</label>
                        <input value={user.fullname} onChange={(e)=>setuser({...user,fullname:e.target.value})} className="input bg-white rounded-md text-black h-8 w-full " type="text" id="fullname" required/>

                        <label className="label" htmlFor="username">User Name</label>
                        <input value={user.username} onChange={(e)=>setuser({...user,username:e.target.value})} className="input bg-white rounded-md text-black h-8 w-full " type="text" id="username" required/>

                        <label className="label" htmlFor="password">Password</label>
                        <input value={user.password} onChange={(e)=>setuser({...user,password:e.target.value})} className="input bg-white rounded-md text-black h-8 w-full " type="password" id="password" required/>

                        <label className="label" htmlFor="confirmpassword">Confirm password</label>
                        <input value={user.confirmpassword} onChange={(e)=>setuser({...user,confirmpassword:e.target.value})} className="input bg-white rounded-md text-black h-8 w-full " type="password" id="confirmpassword" required/>

                        <div className="flex gap-10 mt-5 mx-2">
                            <div className="flex gap-5">
                                <p>Male : </p>
                                <input onChange={()=>genderhandler("male")} checked={user.gender === 'male'} type="checkbox" defaultChecked className="checkbox checkbox-error" />
                            </div>
                            <div className="flex gap-5">
                                <p>Female :</p>
                                <input onChange={()=>genderhandler("female")} checked={user.gender === 'female'} type="checkbox" defaultChecked className="checkbox checkbox-error" />
                            </div>
                        </div>
                        <div>
                            <h1 className="my-4 text-center">Already have an account ?
                                <span className="text-blue-600 mx-2"><Link to='/login'>SignIn</Link></span>
                            </h1>
                        </div>
                        <button className="w-full text-lg rounded-md text-black bg-white h-10 btn hover:text-white"> SignUp </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Signup