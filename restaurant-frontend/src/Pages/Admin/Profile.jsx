import { Helmet } from "react-helmet-async";
import { Link, Outlet } from "react-router-dom";
import shakib from "../../assets/images/Shakib.jpg";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Profile = () => {
  const {users} = useContext(AuthContext)
  return (
    <div>
      <Helmet>
        <title>Grand Restaurant | Profile </title>
      </Helmet>
      <div className="flex flex-col sm:flex-row p-10">
        <div className="sm:w-1/5 bg-neutral-800 p-2 border-mybrown border-2 mx-2 min-h-screen text-stone-300 text-left font-popins">
          <h2 className="text-white text-lg font-bold text-center "> Profile </h2>
          <img className="py-3" src={users.photoURL} alt="" />
          <p> Name: {users.displayName} </p>
          <p> No. Food added: 5 </p>
          <p> No. Food ordered: 4</p>
          <p className="py-3">
            Bio: Food is life. I love to eat and cook. I am a foodie.{" "}
          </p>
          <div className="join join-vertical w-full rounded-sm">
            <Link to="/profile/myfoods">
              {" "}
              <button className="btn w-full btn-outline text-mybrown hover:bg-transparent hover:border-white join-item ">
                My Foods
              </button>
            </Link>
            <Link to="/profile/addfood">
              {" "}
              <button className="btn w-full btn-outline text-mybrown hover:bg-transparent hover:border-white join-item ">
                {" "}
                Add Foods{" "}
              </button>
            </Link>
            <Link to="/profile/mycart">
              {" "}
              <button className="btn w-full btn-outline text-mybrown hover:bg-transparent hover:border-white join-item ">
                My Cart
              </button>
            </Link>
          </div>
        </div>
        <div className="sm:w-4/5  min-h-screen border-mybrown border-2">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Profile;
