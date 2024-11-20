import { useEffect, useState } from "react";
import Items from "../../components/Items";
import localData from '/public/foods.json';

const Populars = () => {
  const [foods, setFoods] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // useEffect(() => {
  //   // fetch("http://localhost:5000/foods")
  //   fetch("https://restaurant-management-server-j6y0ib2bo-azadur-rahmans-projects.vercel.app/foods", {
  //     method:"GET",
  //     mode:'no-cors'
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setFoods(data);
  //     });
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Attempt to fetch data from the server
        const response = await fetch('https://restaurant-management-server-omega.vercel.app/foods');
        const serverData = await response.json();

        // Check if serverData is empty or undefined
        if (!serverData || serverData.length === 0) {
          // Use local data if server data is not available
          console.log('Using local data:', localData);
          setFoods(localData); // Set localData to the state
        } else {
          // Use server data if available
          console.log('Using server data:', serverData);
          setFoods(serverData); // Set serverData to the state
        }
      } catch (error) {
        console.error('Error fetching data:', error);

        // If there is an error, use local data as a fallback
        console.log('Using local data as a fallback:', localData);
        setFoods(localData); // Set localData to the state as a fallback
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []);

  const totalProducts = foods.filter((food) =>
    food.strMeal.toLowerCase().includes(search.toLowerCase())
  );
  const totalPages = Math.ceil(totalProducts.length / itemsPerPage);

  const filteredfoods = totalProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  console.log(filteredfoods.length);
  console.log(totalPages);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );
  return (
    <div>
      <div className="py-5">
        <h2 className="text-2xl text-white py-3 font-popins">
          {" "}
          Search your desired food by Name{" "}
        </h2>
        <input
          className="input input-bordered rounded-sm"
          type="text"
          placeholder="Start typing food name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto pb-5">
        {filteredfoods.map((food) => (
          <Items key={food.id} food={food}></Items>
        ))}
      </div>
      <div className="flex justify-between py-10">
        <button
          className="bg-mybrown hover:bg-neutral-800 text-white font-bold py-2 px-4 rounded"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {/* <span className="text-mybrown">
          Page {currentPage} of {totalPages}
        </span> */}
        <div>
          {pageNumbers.map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={`bg-neutral-800 text-white px-4 py-2 rounded mr-2 ${
                currentPage === pageNumber ? "bg-gray-500" : ""
              }`}
            >
              {pageNumber}
            </button>
          ))}
        </div>
        <button
          className="bg-mybrown hover:bg-neutral-800 text-white font-bold py-2 px-4 rounded"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Populars;
