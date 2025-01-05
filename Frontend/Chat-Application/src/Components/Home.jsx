import Chatbox from "./chatbox.jsx";
import Sidebar from "./Sidebar.jsx";

function Home(){

    return (
        <div className="flex justify-center items-center h-screen"> 
            <div className="h-[90%] w-[70%] bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
                <div className="flex h-full">
                    <Sidebar />
                    <Chatbox />
                </div>
            </div> 
        </div>
    );
}
export default Home