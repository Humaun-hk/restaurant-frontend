import { Link } from "react-router-dom"
import img1 from "../../src/assets/images/beef-burger.png"
import PropTypes from 'prop-types'

const Item = ({food}) => {
  const {id,strMeal,price,strMealThumb,strCategory, orders} = food
    return (
    <div className="card w-80 bg-neutral-800  shadow-xl rounded-sm">
    <figure className="px-10 pt-10">
      <img className="rounded-lg"
        src={strMealThumb}
        alt="Burger"
      />
    </figure>
    <div className="card-body">
      <h2 className="card-title font-rubik text-mybrown"> Beef Burger </h2>
      <p className="text-left text-stone-300 pl-1"> Category: burger </p>
      <p className="text-left text-stone-300 pl-1"> Price:$15 </p>
      <p className="text-left text-stone-300 pl-1"> Orders: {orders} </p>
      <div className="card-actions justify-end">
      <Link to={`/menu/${id}`}><button className="btn btn-outline text-mybrown rounded-sm btn-sm">Details </button></Link>
      </div>
    </div>
  </div>
  )
}

export default Item
Item.propTypes = {
  food: PropTypes.shape({
    id: PropTypes.string.isRequired,
    strMeal: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    orders: PropTypes.number.isRequired,
    strMealThumb: PropTypes.string.isRequired,
    strCategory: PropTypes.string.isRequired,
  }).isRequired,
};
