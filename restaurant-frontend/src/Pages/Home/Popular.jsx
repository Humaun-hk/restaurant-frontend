import Items from "../../components/Items";
import useMenu from "../../Hooks/useMenu";

const Popular = () => {
  const [menu] = useMenu();
  // sorting items based on order quantity (larger to small)
  const sortedFoods = menu.sort((a, b) => b.orders - a.orders);
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto pb-5">
        {sortedFoods.slice(0, 6).map((item) => (
          <Items key={item.id} item={item}></Items>
        ))}
      </div>
    </div>
  );
};

export default Popular;
