import { Link, useLocation, useNavigate } from "react-router-dom";
import "./login.css";
import { FaUser, FaLock, FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const LogIn = () => {
  const { signIn, signInWithGoogle, signInWithGithub, signInWithFacebook } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  // Login with Email

  const handleLogIn = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        console.log(result.users);
        navigate(location?.state ? location.state : "/");
        toast.success("Login Successful");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Wrong email or password");
      });
  };

  // Login with Google
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.users;
        console.log("User infor of:", user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // Login with GitHub
  const handleGitHubSignIn = () => {
    signInWithGithub()
      .then((result) => {
        const user = result.users;
        console.log("User infor of:", user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // Login with Facebook
  const handleFacebookSignIn = () => {
    signInWithFacebook()
      .then((result) => {
        const user = result.users;
        console.log("User infor of:", user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Helmet>
        <title>Grand Restaurant | Log In </title>
      </Helmet>
      <div className="form-container">
        <div className="wrapper">
          <form onSubmit={handleLogIn}>
            <h2 className="text-2xl font-bold"> Log In </h2>
            <div className="input-box">
              <input
                className="placeholder-opacity-100"
                type="email"
                name="email"
                placeholder="email"
                required
              />
              <i>
                <FaUser className="inline"></FaUser>
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
            <button className="btm" type="submit">
              {" "}
              Log In{" "}
            </button>
          </form>
          {/* Social Login */}
          <div>
            <h4 className="my-3">
              {" "}
              Or <br /> Login With{" "}
            </h4>
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-outline mr-3 rounded-sm text-stone-400 bg-transparent hover:bg-mybrown"
            >
              <FaGoogle></FaGoogle>
            </button>
            <button
              onClick={handleGitHubSignIn}
              className="btn btn-outline mr-3 rounded-sm text-stone-400 bg-transparent hover:bg-mybrown"
            >
              <FaGithub></FaGithub>
            </button>
            <button
              onClick={handleFacebookSignIn}
              className="btn btn-outline mr-3 rounded-sm text-stone-400 bg-transparent hover:bg-mybrown"
            >
              <FaFacebook></FaFacebook>
            </button>
          </div>
          <div className="register-link py-5">
            <p>
              {" "}
              Don not have account yet?{" "}
              <Link to="/registration">
                {" "}
                <span className="text-mybrown font-bold hover:underline">
                  {" "}
                  Sign Up{" "}
                </span>{" "}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
