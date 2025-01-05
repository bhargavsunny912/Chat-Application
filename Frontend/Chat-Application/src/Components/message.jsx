import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

function Message({msg}) {

  const seletedUser=useSelector((state)=>state.Auth.selecteduser);
  const authUser=useSelector((state)=>state.Auth.authuser);

  const scroll=useRef();
  useEffect(()=>{
    scroll.current.scrollIntoView({behaviour:"smooth"});
  },[msg])

  if(!msg) return ;

  return (
    <div>
      <div ref={scroll} className={`chat ${authUser._id === msg.senderId ? 'chat-end':'chat-start'}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src={authUser._id === msg.senderId ? authUser.profilephoto : seletedUser.profilephoto}
            />
          </div>
        </div>
        <div className="chat-header">
          <time className="text-xs opacity-50">12:46</time>
        </div>
        <div className="rounded-lg py-2 px-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">{msg.message}</div>
      </div>
    </div>
  );
}
export default Message;

Message.propTypes = {
  message: PropTypes.string,
  msg: PropTypes.object,
};