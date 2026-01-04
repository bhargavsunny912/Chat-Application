import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Home from "./Components/Home";

const approuter = createBrowserRouter([
  { path: "/signup", element: <Signup /> },
  { path: "/login", element: <Login /> },
  { path: "/", element: <Home /> },
]);

function App() {
  return (
    <div className="h-screen text-white">
      <RouterProvider router={approuter} />
    </div>
  );
}
export default App;
