import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useCart = () => {
  const axiosPublic = useAxiosPublic();
  const { users } = useAuth();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", users?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/carts?email=${users.email}`);
      return res.data;
    },
  });
  return [cart, refetch];
};

export default useCart;
