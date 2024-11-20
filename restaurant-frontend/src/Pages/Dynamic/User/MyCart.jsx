import { Helmet } from "react-helmet-async";
import useCart from "../../../Hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + parseInt(item.price), 0);
  const TotalPrice = totalPrice
  const axiosPublic = useAxiosPublic();
  console.log(cart);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: " #d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/carts/${id}`).then((res) => {
          if (res.data.message === "Item removed from cart") {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <Helmet>
        <title>Grand Restaurant | Profile |My Cart </title>
      </Helmet>
      <div>
        <div className="overflow-x-auto p-4">
          <table className="table bg-stone-300">
            {/* head */}
            <thead>
              <tr className="bg-orange-400 text-white">
                <th>#</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item.id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={item.strMealThumb} alt={item.strMeal} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item.strMeal}</div>
                        <div className="text-sm opacity-50">{item.strArea}</div>
                      </div>
                    </div>
                  </td>
                  <td>{item.strCategory}</td>
                  <td>${item.price}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="btn btn-ghost"
                    >
                      <FaTrashAlt className="text-red-600 text-lg"></FaTrashAlt>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>

            <tfoot>
              <tr className="bg-stone-400">
                <th></th>
                <th>Total Orders : {cart.length}</th>
                <th>Cart Total : </th>
                <th> ${TotalPrice} </th>
                <th></th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
