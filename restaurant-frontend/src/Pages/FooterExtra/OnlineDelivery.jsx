import { Link } from "react-router-dom";
import mike from "../../assets/Images/beef-burger.png";
import { Helmet } from "react-helmet-async";

const OnlineDelivery = () => {
  return (
    <div>
      <Helmet>
        <title>Grand Restaurant | Online Delivery </title>
      </Helmet>
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <img src={mike} alt="" />
            <h1 className="text-4xl font-extrabold mt-10 text-white">
              {" "}
              Online Delivery Service{" "}
            </h1>
            <p className="py-6 text-2xl font-bold  italic text-white">
              Our Online Delivery Service will start Soon!
            </p>

            <Link to="/">
              <button className="btn btn-outline text-white">
                {" "}
                Go to Home Page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineDelivery;
