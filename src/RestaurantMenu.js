import { useEffect, useState } from "react"
import Shimer from "./utiles/shimer";
import { useParams } from "react-router-dom";
import { MEN_URL } from "./utiles/constants";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {

  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  },); 

  const fetchMenu = async () => {
    const data = await fetch(MEN_URL + resId + "&catalog_qa=undefined&submitAction=ENTER");
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  }

  if (resInfo === null) return <Shimer />;

  const { name, cuisines, avgRating, costForTwoMessage, areaName } = resInfo.cards[2]?.card?.card?.info;
 // const { itemCards = []} = resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card; 
 

  const catagories =
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );


  return (
    <div className="text-left">
      <p className="text-xs text-gray-300 p-4 w-44">Home / VAADOARA</p>
      <h1 className="text-3xl font-bold text-center mt-6 p-6" >{name}</h1>
      <div className="shadow-2xl border border-gray-00 mx-auto w-6/12 rounded-3xl p-5">
        <h2 className="font-semibold text-orange-500" >{cuisines}</h2>
        <h4 className="font-medium">{avgRating} ⭐ Ratings</h4>
        <h4 className="font-semibold"> price {costForTwoMessage}</h4>
        <p className="font-light" >{areaName}</p>
      </div>

      {catagories?.map((catagory) => (<RestaurantCategory key={catagory?.card?.card.title} data={catagory?.card?.card} />))}

    </div>
  );
};

export default RestaurantMenu

