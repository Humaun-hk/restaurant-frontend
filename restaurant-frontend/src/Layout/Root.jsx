import { Outlet } from "react-router-dom"
import "./root.css"
import Footer from "../Pages/Shared/Footer/Footer"
import Navbar from "../Pages/Shared/Navbar/Navbar"
import Topbar from "../Pages/Shared/Header/Topbar"
import Scrollbar from "../Pages/Shared/Header/Scrollbar"
import { Toaster } from "react-hot-toast"
import { Helmet } from "react-helmet-async"


const Root = () => {
  return (
    <div className="">
      <Helmet>
        <title> Grand Restaurant </title>
      </Helmet>
        <Scrollbar></Scrollbar>
        <Toaster></Toaster>
        <Topbar></Topbar>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>


    </div>
  )
}

export default Root