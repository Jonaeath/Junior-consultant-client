import { createBrowserRouter } from "react-router-dom";
import MainLayout from '../../Layout/MainLayout';
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/UserFile/Login/Login";
import ORU from "../../Officers/ORU";
import RIO from "../../Officers/RIO";
import Signup from "../../Pages/UserFile/SignUp/Signup";
import Dashboard from "../../Pages/Dashboard/Dashboard";


export const routers = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
            {
                path:'/oru',
                element:<ORU></ORU>
            },
            {
                path:'/rio',
                element:<RIO></RIO>
            },
            {
                path:'/dashboard',
                element:<Dashboard></Dashboard>
            }
        ]
    },
])