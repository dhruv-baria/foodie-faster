import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data}) => {
    console.log(data);
    const [showItems , setShowItems] = useState(false);

    const handleClick = () => {
     setShowItems (!showItems); 
    }
 return (
    <div>
      <div className="w-6/12 mx-auto p-4  my-4 shadow-md rounded-lg">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="text-lg  font-semibold ">{data.title} ({data.itemCards.length})</span>
        <span> &#11167;</span>
        </div>

        {showItems && <ItemList items = {data.itemCards}/>}
      </div>
    </div>
  )
}

export default RestaurantCategory
