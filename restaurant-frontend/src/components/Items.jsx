import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
// import img1 from "../../src/assets/images/beef-burger.png"

const Items = ({item}) => {
  const {id,strMeal,price,strMealThumb,strCategory  } = item
  return (
    <div className="card w-80 bg-neutral-800  shadow-xl rounded-sm">
      <figure className="px-10 pt-10">
        <img className="rounded-lg"
          src={strMealThumb}
          alt="Burger"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-rubik text-mybrown"> {strMeal} </h2>
        <p className="text-left text-stone-300 pl-1"> Category: {strCategory} </p>
        <p className="text-left text-stone-300 pl-1"> Price:${price} </p>
        <div className="card-actions justify-end">
          <Link to={`/menu/${id}`}><button className="btn btn-outline text-mybrown rounded-sm btn-sm">Details </button></Link>
          
        </div>
      </div>
    </div>
  );
};

export default Items;

Items.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    strMeal: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    strMealThumb: PropTypes.string.isRequired,
    strCategory: PropTypes.string.isRequired,
  }).isRequired,
};
