import OtherUsers from "./otherusers";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Chatuser from "./chatuser";
import {toast} from 'react-toastify';

function Sidebar() {
  const navigate = useNavigate();

  const logouthandler = async () => {
    try {
      const result = await axios.get("http://localhost:3000/user/logout");
      console.log(result);
      navigate("/login");
      toast.success(result.data.message);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="border-r-2 border-white">
      <div>
        <Chatuser />
      </div>

      <div id="chats" className="h-[75%] overflow-auto">
        <OtherUsers />
      </div>

      <div className="border-t-2">
        <button onClick={logouthandler} className="text-md px-4 py-1 m-3 bg-white text-black rounded-md">
          Logout
        </button>
      </div>
    </div>
  );
}
export default Sidebar;
