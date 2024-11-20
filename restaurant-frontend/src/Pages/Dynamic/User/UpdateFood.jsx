import { Helmet } from "react-helmet-async";
import "./custom.css";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateFood = () => {
 const { id, strMeal, price, strMealThumb, strCategory, strArea, details, made, orders }= useLoaderData()
 const axiosPublic = useAxiosPublic();
 const navigate = useNavigate()
  const handleUpdateFood = async(e) => {
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
    const foodRes = await axiosPublic.patch(`/menu/${id}`, foodItem);
    console.log(foodRes);
    if (foodRes.data.message === "Food item updated successfully") {
      // show success popup
      form.reset();
       Swal.fire({
        position: "top-center",
        icon: "success",
        title: `${strMeal} is added to the contest.`,
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/profile/myfoods")
      
    }
  };
  return (
    <div>
      <Helmet>
        <title>Grand Restaurant | Profile | Update Food Item </title>
      </Helmet>
      <div>
        <div className="form-container ">
          <div className="wrapper foodadder">
            <form onSubmit={handleUpdateFood}>
              <h2 className="text-2xl font-bold text-black"> Update Food Items </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-2 mt-5 ">
                <div className="input-box my-2 text-white">
                  <input
                    className=" text-white"
                    type="text"
                    name="strMeal"
                    defaultValue={strMeal}
                    placeholder="Name"
                    required
                  />
                 
                </div>
                <div className="input-box my-2">
                  <input
                    className="placeholder-opacity-100"
                    type="text"
                    defaultValue={strMealThumb}
                    name="strMealThumb"
                    placeholder="Insert Photo Url"
                  />
               
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-2">
                <div className="input-box  my-2">
                  <input
                    type="text"
                    defaultValue={strCategory}
                    name="strCategory"
                    placeholder="Insert Food Category"
                    required
                  />
               
                </div>
                <div className="input-box  my-2">
                  <input
                    className="placeholder-opacity-100"
                    type="text"
                    defaultValue={price}
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
                    defaultValue={made}
                    name="made"
                    placeholder="Made By"
                    required
                  />
               
                </div>
                <div className="input-box  my-2">
                  <input
                    className="placeholder-opacity-100"
                    type="text"
                    defaultValue={strArea}
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
                    defaultValue={orders}
                    name="orders"
                    placeholder="Number of Orders"
                    required
                  />
                  {/* <i>
                    <FaLock className="inline"></FaLock>
                  </i> */}
                </div>
                <div className="input-box">
                  <input
                    className="placeholder-opacity-100"
                    type="text"
                    defaultValue={details}
                    name="details"
                    placeholder="Insert Details Please"
                    required
                  />
                 
                </div>
              </div>

              <button className="btn btn-primary bg-mybrown rounded-full btn-block border-0 hover:bg-black" type="submit">
                {" "}
                Update {" "}
              </button>
          
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateFood;
