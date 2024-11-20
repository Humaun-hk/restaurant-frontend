import { Helmet } from "react-helmet-async";
import "./custom.css";

import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";



const AddFood = () => {
  const axiosPublic = useAxiosPublic();

  const handleAddFood = async(e) => {
    e.preventDefault();
    const form = e.target;
    const strMeal = form.strMeal.value;
    const strMealThumb = form.strMealThumb.value;
    const strCategory = form.strCategory.value;
    const price = form.price.value;
    const made = form.made.value;
    const strArea = form.strArea.value;
    const orders = form.orders.value;
    const details = form.details.value;
    const foodItem = {
      strMeal,
      strMealThumb,
      strCategory,
      price,
      made,
      strArea,
      orders,
      details,
    };
    const foodRes = await axiosPublic.post("/menu", foodItem);
    console.log(foodRes);
    if (foodRes.data.message === "Food item added successfully") {
      // show success popup
      form.reset();
      toast.success("Successfully added product!");
      
      // Swal.fire({
      //   position: "top-center",
      //   icon: "success",
      //   title: `${data.name} is added to the contest.`,
      //   showConfirmButton: false,
      //   timer: 1500,
      // });
    }
  };
  return (
    <div>
      <Helmet>
        <title>Grand Restaurant | Profile |Add Food Items </title>
      </Helmet>
      <div>
        <div className="form-container">
          <div className="wrapper foodadder">
            <form onSubmit={handleAddFood}>
              <h2 className="text-2xl font-bold"> Add Food Items </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-2 mt-5 ">
                <div className="input-box my-2">
                  <input
                    className="placeholder-opacity-100"
                    type="text"
                    name="strMeal"
                    placeholder="Food Name"
                    required
                  />
                </div>
                <div className="input-box my-2">
                  <input
                    className="placeholder-opacity-100"
                    type="text"
                    name="strMealThumb"
                    placeholder="Insert Photo Url"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-2">
                <div className="input-box  my-2">
                  <input
                    type="text"
                    name="strCategory"
                    placeholder="Insert Food Category"
                    required
                  />
                </div>
                <div className="input-box  my-2">
                  <input
                    className="placeholder-opacity-100"
                    type="text"
                    name="price"
                    placeholder="Add Price"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-2">
                <div className="input-box  my-2">
                  <input
                    type="text"
                    name="made"
                    placeholder="Made By"
                    required
                  />
                </div>
                <div className="input-box  my-2">
                  <input
                    className="placeholder-opacity-100"
                    type="text"
                    name="strArea"
                    placeholder="Orignin Country"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-2 mb-5">
                <div className="input-box">
                  <input
                    type="text"
                    name="orders"
                    placeholder="Number of Orders"
                    required
                  />
                </div>
                <div className="input-box">
                  <input
                    className="placeholder-opacity-100"
                    type="text"
                    name="details"
                    placeholder="Insert Details Please"
                    required
                  />
                </div>
              </div>

              <button className="btm" type="submit">
                {" "}
                Add Food Items{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFood;
