import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import {useSelector,useDispatch} from 'react-redux';
import { toast } from "react-toastify";
import { setOtherusers } from "../Redux/Authslice";

function Chatuser() {

  const [search,setsearch]=useState("");
  const otherUsers=useSelector((state)=>state.Auth.otherusers);
  const dispatch=useDispatch();

  const searchhandler=(e)=>{
    e.preventDefault();
    const searchuser=otherUsers?.find((user)=>user.fullname.toLowerCase().includes(search.toLowerCase()));
    if(searchuser){
      dispatch(setOtherusers([searchuser]));
    }
    else{
      toast.error("User not found");
    }
    console.log(search);
  }

  return (
    <div className=" h-[15%]">
      <div className="">
        <form onSubmit={searchhandler} className="flex items-center border-b-2 border-white m-1">
          <input
            value={search}
            onChange={(e)=>setsearch(e.target.value)}
            className="bg-white text-black rounded-md py-2 px-4 outline-none my-3 mx-1"
            type="text"
            placeholder="Search"
          />
          <button type="submit" className="bg-zinc-700 tet-white p-3 text-lg rounded-lg">
            <FaSearch />
          </button>
        </form>
      </div>
    </div>
  );
}
export default Chatuser;
