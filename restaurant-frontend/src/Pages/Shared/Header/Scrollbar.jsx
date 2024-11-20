import Marquee from "react-fast-marquee";
import { FaNewspaper } from "react-icons/fa6";

const Scrollbar = () => {
  return <div className="bg-myblack py-3 text-white px-20">
    <Marquee speed={100} pauseOnHover={true}>
        <p className="mr-5"><span><FaNewspaper className="inline pb-1 mr-2 text-lg"></FaNewspaper></span>  Savor the Flavor: Where Every Bite Tells a Story! </p>
        <p className="mr-5"> <FaNewspaper className="inline pb-1 mr-2 text-lg"></FaNewspaper>Elevate Your Taste Buds at Grand Restaurant </p>
        <p className="mr-5">  <FaNewspaper className="inline pb-1 mr-2 text-lg"></FaNewspaper> From Our Kitchen to Your Heart: A Culinary Adventure Awaits! </p>
    </Marquee>
  </div>
};

export default Scrollbar;
