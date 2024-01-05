import { useAppSelector } from "@/redux/hooks";

const CartPage = () => {
  const { products } = useAppSelector((state) => state.cart);
  console.log("products into cartPage", products);

  return (
    <div>
      <h1>Cart Page</h1>
    </div>
  );
};

export default CartPage;
