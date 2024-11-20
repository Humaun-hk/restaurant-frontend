import { Helmet } from 'react-helmet-async'
import FoodCard from '../../../components/FoodCard'
import useMenu from '../../../Hooks/useMenu'


const MyFoods = () => {
  const [menu] = useMenu()
  return (
    <div>
        <Helmet>
        <title>Grand Restaurant | Profile |My Foods </title>
      </Helmet>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto'>

        {
          menu.map(food => <FoodCard key={food.id} food={food}></FoodCard>)
        }
   
      </div>
      </div>
  )
}

export default MyFoods