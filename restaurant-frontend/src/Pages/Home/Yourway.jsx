import SectionHeader from "../../components/SectionHeader";
import deli from "../../assets/images/delicious-burger.jpg";
import { Link } from "react-router-dom";

const Yourway = () => {
  const sectionTitle = {
    name: "Have it Your way",
  };
  return (
    <div>
      <SectionHeader props={sectionTitle}></SectionHeader>
      <div className="flex flex-col sm:flex-row justify-center items-center px-5 sm:px-20 py-10">
        <div className=" w-full sm:w-1/3">
          <img className="h-[90%]"  src={deli} alt="" />
        </div>
        <div className=" w-full sm:w-1/3 bg-slate-100 px-16 py-[72px] text-left h-full">
          <h3 className="text-5xl font-rubik font-extrabold ">
            {" "}
            <span className="text-3xl underline"> Our </span> <br /> Menus
          </h3>

          <p className="py-10">
          Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi. Sed ut perspiciatis unde omnis iste natus error sit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
          </p>

          <Link to="/menu">
            <button className="btn bg-mybrown border-0 text-white rounded-sm btn-wide font-bold hover:bg-myblack font-rubik">
              {" "}
              View Menu{" "}
            </button>
          </Link>
        </div>
        <div className=" w-full sm:w-1/3 bg-slate-300 px-16 py-[72px] text-left h-full">
          <h3 className="text-5xl font-rubik font-extrabold ">
            {" "}
            <span className="text-3xl underline"> Order </span> <br /> Delivery
          </h3>

          <p className="py-10">
          Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi. Sed ut perspiciatis unde omnis iste natus error sit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
          </p>

          <Link to="/menu">
            <button className="btn bg-myblack font-rubik border-0 text-white rounded-sm btn-wide font-bold hover:bg-mybrown">
              {" "}
              View Menu{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Yourway;
