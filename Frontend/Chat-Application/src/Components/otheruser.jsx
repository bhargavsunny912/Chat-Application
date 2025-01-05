import PropTypes from "prop-types";
import {useDispatch,useSelector} from 'react-redux';
import { setSelecteduser } from "../Redux/Authslice";

function Otheruser({ name, photo ,user}) {

    const dispatch=useDispatch();
    const selecteduser=useSelector((state)=>state.Auth.selecteduser);

    const selectedhandler=(user)=>{
        dispatch(setSelecteduser(user));
    }

  return (
    <div>
      <div onClick={()=>selectedhandler(user)} className={`${user === selecteduser ? 'bg-zinc-200 text-black' : ''} flex items-center gap-5 ml-3 hover:bg-zinc-500 hover:cursor-pointer rounded-md px-2 py-1`}>
        <div className="online avatar h-12 w-12">
          <img className="rounded-full" src={photo} alt="profilephoto" />
        </div>
        <h1 className="text-md">{name}</h1>
      </div>
    </div>
  );
}
export default Otheruser;

Otheruser.propTypes = {
  name: PropTypes.string,
  photo: PropTypes.string,
  user: PropTypes.object,
};
