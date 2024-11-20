// import ketchup from "../assets/images/tomato_sauce.jpg";
import PropTypes from 'prop-types'
import useMenu from '../Hooks/useMenu';
import Swal from 'sweetalert2';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import { Link } from 'react-router-dom';

const FoodCard = ({ food }) => {
  //console.log(food);
  const { id, strMeal, price, strMealThumb, strCategory, strArea, details } =
  food;
  const [menu,,refetch] = useMenu()
  const axiosPublic = useAxiosPublic()
 
  const handleDeleteItem = ()=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then( async (result) => {
      if (result.isConfirmed) {
        const res = await axiosPublic.delete(`/menu/${id}`);
        console.log(res.data);
        if (res.data.message === "Food item deleted successfully") {
          // refetch to update the ui
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${strMeal} has been deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  }  
  return (
    <div className="card  bg-neutral-800 text-gray-400 shadow-sm rounded-md shadow-mybrown/30  m-3">
      <figure className="w-full">
        <img src={strMealThumb} alt="Album" />
      </figure>
      <div className="card-body">
        <div className="text-left">
          <h2 className="card-title text-mybrown"> {strMeal} </h2>
          <p className="pt-4">
            <span className="font-bold">Price:${price}</span>
          </p>
          <p>
            <span className="font-bold">Category : </span> {strCategory}
          </p>
          <p>
            <span className="font-bold">Made By:</span> Who?{" "}
          </p>
          <p>
            <span className="font-bold"> Origin: </span> {strArea}
          </p>
          <p className=" mt-2">
            <span className="font-bold "> Details: </span> {details}
          </p>

          <div className="card-actions justify-start pt-5">
            <Link to={`/profile/updatefood/${id}`}>
            <button className="btn btn-outline text-mygreen rounded-sm btn-sm">
              {" "}
              Update{" "}
            </button>
            </Link>
            <button onClick={()=>handleDeleteItem(id)} className="btn btn-outline text-myred rounded-sm btn-sm">
              {" "}
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

FoodCard.propTypes = {
  food: PropTypes.shape({
    id: PropTypes.string.isRequired,
    strMeal: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    strMealThumb: PropTypes.string.isRequired,
    strCategory: PropTypes.string.isRequired,
    strArea: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
  }).isRequired,
};
