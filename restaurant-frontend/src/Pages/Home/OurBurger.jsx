import burger1 from "../../assets/images/fish-burger.png"
import burger2 from "../../assets/images/beef-burger.png"
import burger3 from "../../assets/images/veggie-burger.png"

const OurBurger = () => {
  return (
    <div className='my-10'>
        <div className='flex flex-col justify-center items-center'>
            <h2 className='text-5xl font-bold uppercase text-mybrown border-y-4 border-mybrown my-5 py-4 w-96'>Our Burgers</h2>
        </div>
        <div className='flex flex-col sm:flex-row justify-evenly gap-5 p-10'>
            <div className='flex flex-col justify-center items-center gap-3 text-white'>
                <img src={burger1} alt="" />
                <h3 className="text-3xl font-bold text-mybrown">Fish Burger</h3>
                <p>LIFE IS LIKE A BURGER THE MORE YOU ADD TO IT, THE BETTER IT BECOMES</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-3 text-white'>
                <img src={burger2} alt="" />
                <h3 className="text-3xl font-bold text-mybrown">Beef Burger</h3>
                <p>LIFE IS LIKE A BURGER THE MORE YOU ADD TO IT, THE BETTER IT BECOMES</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-3 text-white'>
                <img className="w-10/12" src={burger3} alt="" />
                <h3 className="text-3xl font-bold text-mybrown">Fish Burger</h3>
                <p>LIFE IS LIKE A BURGER THE MORE YOU ADD TO IT, THE BETTER IT BECOMES</p>
            </div>
            
            
        </div>
    </div>
  )
}

export default OurBurger