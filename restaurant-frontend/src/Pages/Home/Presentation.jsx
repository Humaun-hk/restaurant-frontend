import { Link } from "react-router-dom";
import ketchup from "../../assets/images/tomato_sauce.jpg";
import salad from "../../assets/images/salad-with-fresh-fish.jpg";

const Presentation = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center items-center bg-white">
        <div className="w-full md:w-1/2">
          <img src={ketchup} alt="Ketchup" />
        </div>
        <div className="md:w-1/2 bg-white p-5">
          <div className="divider w-3/4 text-black  mx-auto text-2xl uppercase font-bold before:bg-black after:bg-black pb-5">
            Present
          </div>
          <h2 className="text-7xl font-rubik font-extrabold">TOMATO ORIGINAL</h2>
          <h3 className="text-5xl font-bold font-pacifico text-myred">Sauce</h3>
          <h5 className="py-6">OUR SIGNATURE HANDMADE BEEF PATTY</h5>
          <p className="py-4 md:px-20">
            Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi. Sed ut perspiciatis unde omnis iste
            natus error sit. Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium.
          </p>
          <Link to="/menu">
            <button className="btn bg-myred text-white rounded-sm btn-wide font-bold hover:bg-mybrown">
              {" "}
              View Menu{" "}
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center">
       
        <div className="md:w-1/2  p-5">
          <div className="divider w-3/4 text-white  mx-auto text-2xl uppercase font-bold before:bg-white after:bg-white pb-5">
            Present
          </div>
          <h2 className="text-7xl font-extrabold font-rubik text-white"><span className="text-mygreen ">FRESH</span> <br />  SALAD</h2>
          {/* <h3 className="text-5xl font-bold text-mygreen">Sauce</h3> */}
          <h5 className="py-6 text-white">LIFE IS LIKE A BURGER THE MORE YOU ADD TO IT, THE BETTER IT BECOMES</h5>
          <p className="py-4 md:px-20 font-popins text-white">
          Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi. Sed ut perspiciatis unde omnis iste natus error sit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
          </p>
          <Link to="/menu">
            <button className="btn bg-mygreen border-0 text-white rounded-sm btn-wide font-bold hover:bg-mybrown">
              {" "}
              View Menu{" "}
            </button>
          </Link>
        </div>
        <div className="w-full md:w-1/2">
          <img src={salad} alt="Ketchup" />
        </div>
      </div>
    </div>
  );
};

export default Presentation;
