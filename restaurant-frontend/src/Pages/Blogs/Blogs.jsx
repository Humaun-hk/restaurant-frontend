import { Helmet } from "react-helmet-async";
import Accordions from "../../components/Accordions";

const Blogs = () => {
  return (
    <div>
      <Helmet>
        <title> Grand Restaurant | Blogs </title>
      </Helmet>
      <div>
        <div className="">
          <Accordions></Accordions>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
