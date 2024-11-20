import { Helmet } from "react-helmet-async";
import SectionHeader from "../../components/SectionHeader";
import Subscribe from "../../components/Subscribe";
import Banner from "./Banner";
import Icecream from "./Icecream";
import OurBurger from "./OurBurger";
import Popular from "./Popular";
import Presentation from "./Presentation";
import Yourway from "./Yourway";
import { Link } from "react-router-dom";

const Home = () => {
  const sectionTitle = {
    name: "Most Popular Items",
  };
  return (
    <div>
      <Helmet>
        <title> Grand Restaurant | Home </title>
      </Helmet>
      <Banner></Banner>
      <OurBurger></OurBurger>
      <div>
        <SectionHeader props={sectionTitle}></SectionHeader>
        <div className="flex flex-col justify-center items-center">
          <Popular></Popular>
          <div className="mx-auto pb-10">
            <Link to="menu">
              <button className="btn bg-mybrown btn-outline rounded-sm hover:bg-mybrown">
                {" "}
                All Food Items{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <Presentation></Presentation>
      </div>
      <div>
        <Icecream></Icecream>
      </div>
      <div className=" pt-20">
        <Yourway></Yourway>
      </div>
      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;
