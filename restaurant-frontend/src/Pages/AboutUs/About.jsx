import { Helmet } from "react-helmet-async";
import Presentation from "../Home/Presentation";
import SectionHeader from "../../components/SectionHeader";
import fburger from "../../assets/images/fish-burger.png"

const About = () => {
  const sectionTitle = {
    name: "Have it Your way",
  };
  return (
    <div>
      <Helmet>
        <title> Grand Restaurant | About Us </title>
      </Helmet>
      {/* Content*/}
      <div>
        {/* Section 1 */}
        <div>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: "url(https://i.ibb.co/2ytBdcX/shrimp.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <p></p>
                <h1 className="mb-5 text-7xl font-bold"> About Us </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="my-20">
          <div className="py-30">
          <SectionHeader props={sectionTitle}></SectionHeader>
            <div className="flex flex-col lg:flex-row-reverse justify-around items-center">
              <img
                src={fburger}
                className="max-w-sm rounded-lg shadow-2xl"
              />
              <div>
                <h1><span className="text-6xl font-bold text-mybrown font-rubik">Original</span> <br /><span className="text-9xl font-bold text-stone-50 font-rubik">Fish</span><br /> <span className="text-7xl font-bold text-stone-50 font-rubik">Burger</span></h1>
              
              
              </div>
            </div>
          </div>
        </div>
        {/* Section 2 */}
        <div>
          <Presentation></Presentation>
        </div>
      </div>
    </div>
  );
};

export default About;
