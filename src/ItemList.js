import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./utiles/cartSlice";



const ItemList = ({ items }) => {
   
    const cartItems = useSelector((store)=> store.cart.items);  
    console.log(cartItems);


const dispatch = useDispatch();


  const handleAddItem = (item)=>{
     dispatch(addItem(item));


  };

  const isAlreadyAdded = (item) => cartItems.find(e=> e.card.info.id === item.card.info.id) ? "Added" : "ADD"
    


    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between ">
                    <div className="w-9/12">
                        <div className="py-2">
                            <span className="font-bold">{item.card.info.name}</span>
                            <span className="font-semibold">  ₹ {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
                        </div>
                        <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 p-4">
                        <div className="absolute hover:scale-105">
                            <button className=" p-2 mx-16 px-2 mt-24 rounded-lg bg-lime-400 shadow-lg"
                            onClick={() => handleAddItem(item)}
                            >{isAlreadyAdded(item) }</button>
                        </div>
                        <img alt="" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/" + item.card.info.imageId} className="rounded-lg w-60 h-32"/>
                     </div>
                </div>

            ))}
        </div>
    )
}

export default ItemList
