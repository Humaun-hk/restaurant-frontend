import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { users, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    logOut()
      .then(() => {
        toast.success("Logged Out Successfully");
        navigate("/");
      })
      .catch((error) => {
        toast.error("Something Wrong", error);
      });
  };

  const navlinks = (
    <>
      <li>
        <NavLink className="hover:text-mybrown text-lg " to="/">
          {" "}
          Home{" "}
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:text-mybrown text-lg " to="/about">
          {" "}
          About Us{" "}
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:text-mybrown text-lg " to="/menu">
          {" "}
          Menu{" "}
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:text-mybrown text-lg " to="/gallery">
          {" "}
          Gallery{" "}
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:text-mybrown text-lg " to="/blogs">
          {" "}
          Blogs{" "}
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:text-mybrown text-lg " to="/contact">
          {" "}
          Find Us{" "}
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-myblack shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden text-stone-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navlinks}
          </ul>
        </div>
        <Link>
          <img src="/restaurant-64.png" alt="" />
        </Link>
        <a className="btn btn-ghost text-xl text-mybrown uppercase">
          {" "}
          Grand Restaurant{" "}
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white ">{navlinks}</ul>
      </div>
      {/* <div className="navbar-end">
        {users && (
          <>
            <div className="flex justify-center items-center">
              <p className="text-stone-50 text-sm ">
                Welcome! {users.displayName}
              </p>
              <Link to="/profile">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div title="click to view profile" className="w-10 rounded-full">
                    <img src={users.photoURL} alt={users.displayName} />
                  </div>
                </label>
              </Link>
            </div>

            <Link to="/mycart">
              <a className="btn btn-sm btn-outline border-white text-white rounded-sm mr-2">
                {" "}
                <FaCartArrowDown></FaCartArrowDown>{" "}
              </a>
            </Link>
          </>
        )}
        {users ? (
          <button
            onClick={handleSignOut}
            className="btn btn-sm btn-outline rounded-sm hover:bg-mybrown hover:text-black text-mybrown"
          >
            {" "}
            Log Out{" "}
          </button>
        ) : (
          <Link to="/login">
            {" "}
            <button className="btn btn-sm btn-outline rounded-sm hover:bg-mybrown hover:text-black text-mybrown">
              {" "}
              Log In{" "}
            </button>
          </Link>
        )}
      </div> */}
      <div className="navbar-end">
        {users?.email ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={users.photoURL} alt={users.displayName} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100  w-48 rounded-sm"
            >
              <li>
                <p className="text-mybrown text-sm text-center">
                  Welcome! {users.displayName}
                </p>
              </li>
              <li>
                <Link to="/profile">My Profile</Link>
              </li>
              <li title="My added Foods, can update and delete food here">
                <Link to="/profile/myfoods"> My Foods </Link>
              </li>
              <li>
                <Link to="/profile/addfood"> Add Food Form </Link>
              </li>
              <li>
                <Link to="/profile/mycart"> My Cart <FaCartArrowDown></FaCartArrowDown> </Link>
              </li>
              <li>
                <button
                  className="btn btn-sm bg-mybrown  btn-ghost"
                  onClick={handleSignOut}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn btn-sm btn-outline rounded-sm hover:bg-mybrown hover:text-black text-mybrown">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
