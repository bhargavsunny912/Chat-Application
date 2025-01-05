import useGetmessages from "../Hooks/useGetmessages";
import Message from "./message";
import {useSelector} from 'react-redux';

function Messages(){

    const usermsg=useSelector((state)=>state.Messages.msg);

    useGetmessages();

    if(!usermsg) return ;

    return (
        <div>
            {usermsg.map((msg)=>{
                return <Message key={msg._id} msg={msg} />
            })}
        </div>
    );
}
export default Messages