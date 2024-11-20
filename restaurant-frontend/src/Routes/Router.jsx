import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/Error/ErrorPage";
import Home from "../Pages/Home/Home";
import About from "../Pages/AboutUs/About";
import Menu from "../Pages/Menu/Menu";
import Gallery from "../Pages/Gallery/Gallery";
import Blogs from "../Pages/Blogs/Blogs";
import FindUs from "../Pages/FindUs/FindUs";
import LogIn from "../Pages/Admin/LogIn";
import Register from "../Pages/Admin/Register";
import Profile from "../Pages/Admin/Profile";
import HelpCenter from "../Pages/FooterExtra/HelpCenter";
import OnlineDelivery from "../Pages/FooterExtra/OnlineDelivery";
import PrivacyPolicy from "../Pages/FooterExtra/PrivacyPolicy";
import Terms from "../Pages/FooterExtra/Terms";
import ProductDetails from "../Pages/Dynamic/Product/ProductDetails";
import MyFoods from "../Pages/Dynamic/User/MyFoods";
import MyCart from "../Pages/Dynamic/User/MyCart";
import AddFood from "../Pages/Dynamic/User/AddFood";
import UpdateFood from "../Pages/Dynamic/User/UpdateFood";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
   {
    path:"/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/about",
            element:<About></About>
        },
        {
            path:"/menu",
            element:<Menu></Menu>
        },
        {
            path:"menu/:id",
            element:<ProductDetails></ProductDetails>,
            loader: ({params})=> fetch(`http://localhost:5000/menu/${params.id}`)
           
        },
        {
            path:"/gallery",
            element:<Gallery></Gallery>
        },
        {
            path:"/blogs",
            element:<Blogs></Blogs>
        },
        {
            path:"/contact",
            element:<FindUs></FindUs>
        },
        {
            path:"/login",
            element:<LogIn></LogIn>
        },
        {
            path:"/registration",
            element:<Register></Register>
        },
        {
            path:"/help",
            element:<HelpCenter></HelpCenter>
        },
        {
            path:"/online",
            element:<OnlineDelivery></OnlineDelivery>
        },
        {
            path:"/privacy",
            element:<PrivacyPolicy></PrivacyPolicy>
        },
        {
            path:"/terms",
            element:<Terms></Terms> 
        },
        {
            path:"/profile",
            element: <PrivateRoute><Profile></Profile></PrivateRoute> ,
            children:[
                {
                    path:"/profile/myfoods",
                    element:<PrivateRoute><MyFoods></MyFoods></PrivateRoute>
                },
                {
                    path:"/profile/mycart",
                    element:<PrivateRoute><MyCart></MyCart></PrivateRoute>
                },
                {
                    path:"addfood",
                    element:<PrivateRoute><AddFood></AddFood></PrivateRoute>
                },
                {
                    path:"updatefood/:id",
                    element: <PrivateRoute><UpdateFood></UpdateFood></PrivateRoute>,
                    loader:({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
                }
            ]
        }
        // {
        //     path:"/foods/:id",
        //     element:<PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        //     // loader: ({params})=> fetch(`http://localhost:5000/foods/${params.id}`)
        //     loader: (object)=> fetch(`http://localhost:5000/foods/${object.params.id}`)
        // }
        
    ]
   } 
])

export default router