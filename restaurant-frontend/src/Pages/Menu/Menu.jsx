import { Helmet } from "react-helmet-async";
import useMenu from "../../Hooks/useMenu";
import Items from "../../components/Items";
import { useState } from "react";
import Popular from "../Home/Popular";
import Populars from "../Home/Populars";

const Menu = () => {
  const [menu] = useMenu();
  // //console.log(menu)

  return (
    <div>
      <Helmet>
        <title> Grand Restaurant | Menu </title>
      </Helmet>

      {/* Main Menu Section starts */}
      <div className="flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto pb-5">
          {menu.map((item) => (
            <Items key={item.id} item={item}></Items>
          ))}
        </div>
      </div>
      {/* Menu Sections Ends */}
    </div>
  );
};

export default Menu;
