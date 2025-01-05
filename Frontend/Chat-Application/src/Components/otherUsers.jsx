import useOtherusers from "../Hooks/useotherusers";
import Otheruser from "./otheruser";
import { useSelector } from "react-redux";

function OtherUsers(){

    useOtherusers();

    const otherUsers=useSelector((state)=>state.Auth.otherusers);

    if(!otherUsers) return ;

    return (
        <div>
            {otherUsers.map((user)=>{
                return <Otheruser key={user._id} user={user} name={user.fullname} photo={user.profilephoto} />
            })}
        </div>
    );
}
export default OtherUsers;