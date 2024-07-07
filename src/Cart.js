import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList";
import { clearCart } from "./utiles/cartSlice";
import { Link } from "react-router-dom";


const Cart = () => {

  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  return (
    <div>
      <div className="w-6/12 m-auto">
        <h1 className="m-4 p-4 text-left font-semibold text-xl rounded-lg bg-orange-500 text-white border border-gray-300 shadow-md">Cart</h1>
        <button className="shadow-md font-semibold  text-sm p-1 rounded-xl mx-4 border border-gray-200  hover:bg-slate-300 "
          onClick={
            handleClearCart
          }

        >Clear Cart 🚮</button>
        {cartItems.length === 0 && <div>
          <img alt="" className="size-48 w-64 rounded-lg shadow-lg m-auto hover:scale-105" src="https://www.seekpng.com/png/detail/117-1170538_404-your-cart-is-empty.png" />
          <h1 className="text-center text-sm font-light">View more Restaurants</h1>
          <h3 className="text-center m-2 text-lg mx-36 text-white bg-orange-500 hover:text-black shadow-lg ">
            <Link to="/" >See Restaurants Near You</Link>
          </h3></div>}
        <ItemList items={cartItems} />
        <span className="bg-green-500 text-white border border-gray-300 m-2 p-2 rounded-lg mx-4 shadow-md "> To pay</span>
        <p className="text-sm font-mono m-4 p-4 text-slate-400 text-center border border-gray-600 shadow-2xl rounded-lg">Bill details</p>
      </div>
    </div>
  );
};

export default Cart;
