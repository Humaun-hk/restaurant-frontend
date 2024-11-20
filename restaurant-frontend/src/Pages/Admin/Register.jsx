import { Link, useLocation, useNavigate } from "react-router-dom";
import "./login.css";
import { FaUser, FaLock, FaEnvelope, FaImage } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, handleUpdateProfile } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
 // console.log(createUser, handleUpdateProfile);
  const location = useLocation();
  const navigate = useNavigate()


  const HandleRegistration = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const photo = formData.get("photo");
    const password = formData.get("password");
    console.log(name, email, password, photo);

    
      createUser(email, password)
        .then((result) => {
          handleUpdateProfile(name, photo).then(() => {
            console.log(result.user);
            const userInfo = {
              name,
              email,
              photo,
            };
            axiosPublic.post("/users", userInfo).then((res) => {
              console.log(res.data);
              
              if (res.data.insertedId) {
                console.log("user info sent database");

                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User created successfully.",
                  showConfirmButton: false,
                  timer: 1500,
                });
                // navigate("/");
              }
            });
            toast.success("Hey!! Registration Successful");
            navigate(location?.state ? location.state : "/");
          });
        })
        .then((error) => {
          console.log(error);
          // toast.error("Something is wrong")
        });
    
    formData.reset();
  };

  return (
    <div>
      <Helmet>
        <title> Grand Restaurant | Registration </title>
      </Helmet>
      <div className="form-container">
        <div className="wrapper">
          <form onSubmit={HandleRegistration}>
            <h2 className="text-2xl font-bold"> Registration </h2>
            <div className="input-box">
              <input
                className="placeholder-opacity-100"
                type="text"
                name="name"
                placeholder="Name"
                required
              />
              <i>
                <FaUser className="inline"></FaUser>
              </i>
            </div>
            <div className="input-box">
              <input
                className="placeholder-opacity-100"
                type="email"
                name="email"
                placeholder="email"
                required
              />
              <i>
                <FaEnvelope className="inline"></FaEnvelope>
              </i>
            </div>
            <div className="input-box">
              <input
                type="password"
                name="password"
                placeholder="password"
                required
              />
              <i>
                <FaLock className="inline"></FaLock>
              </i>
            </div>
            <div className="input-box">
              <input
                className="placeholder-opacity-100"
                type="text"
                name="photo"
                placeholder="Insert Photo Url"
              />
              <i>
                <FaImage className="inline"></FaImage>
              </i>
            </div>
            <button className="btm" type="submit">
              {" "}
              Sign Up{" "}
            </button>
            <div className="register-link py-5">
              <p>
                {" "}
                Already have account!{" "}
                <Link to="/login">
                  {" "}
                  <span className="text-mybrown font-bold hover:underline">
                    Log In
                  </span>{" "}
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
