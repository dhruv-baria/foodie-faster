import ResturantCard from "./Resturantcards";
import { useEffect, useState } from "react";
import Shimer from "./utiles/shimer";
import { Link } from "react-router-dom";
import HorizontalCards from "./HorizontalCards";





const Body = () => {

    const [listOfResturants, setListOfResturant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [filteredRestaurantTwo, setFilteredRestaurantTwo] = useState([]);
    const [ListRestaurantTwo, setListRestaurantTwo] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.30080&lng=73.20430&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setListOfResturant(json.data?.cards[1]?.card.card?.gridElements?.infoWithStyle?.restaurants);
        setListRestaurantTwo(json.data?.cards[4]?.card.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json.data?.cards[1]?.card.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurantTwo(json.data?.cards[4]?.card.card?.gridElements?.infoWithStyle?.restaurants);
    };

    return listOfResturants?.length === 0 ? (<Shimer />) :
        (
            <div className=" body " >

                <div className="flex justify-center p-9" >
                    <div className="search">
                        <input type="text" className="shadow-md border border-gray-400 " placeholder=" Search for Restaurants" value={searchText}
                            onChange={(e) => {
                                setSearchText(e.target.value);
                            }} />
                        <button className="shadow-md font-semibold p-1 rounded-xl border text-sm border-gray-200 mx-4 hover:bg-orange-400" onClick={() => {
                            console.log(searchText)

                            const filteredRestaurant = listOfResturants?.filter((res) => res.info.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
                            );

                            setFilteredRestaurant(filteredRestaurant);


                            const filteredRestaurantTwo = ListRestaurantTwo?.filter((res) => res.info.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
                            );

                            setFilteredRestaurantTwo(filteredRestaurantTwo);


                        }}>	&lArr; Whats on your mind ?</button>
                    </div>
                    <div className="btn">
                        <button className="shadow-md font-semibold  text-sm p-1 rounded-xl mx-4 border border-gray-200  hover:bg-orange-400 "
                            onClick={() => {
                                const filteredList = listOfResturants?.filter(
                                    (res) => res.info.avgRatingString > "4.5"
                                );
                                setFilteredRestaurant(filteredList);

                                const filterlisttwo = ListRestaurantTwo?.filter(
                                    (res) => res.info.avgRatingString > "4.5"
                                );
                                setFilteredRestaurantTwo(filterlisttwo);

                            }}
                        >
                            Top Rated Resturants
                        </button>
                        <button className="shadow-md font-semibold text-sm p-1 rounded-xl mx-4 border border-gray-200  hover:bg-orange-400 "

                        >
                            Pure Veg
                        </button>
                        <button className="shadow-md font-semibold text-sm p-1 rounded-xl mx-4 border border-gray-200  hover:bg-orange-400 "

                        >
                            fast delivery
                        </button>
                        <button className="shadow-md font-semibold text-sm p-1 rounded-xl mx-4 border border-gray-200  hover:bg-orange-400 "

                        >
                            Offers
                        </button>
                        <button className="shadow-md font-semibold text-sm p-1 rounded-xl mx-4 border border-gray-200  hover:bg-orange-400 "

                        >
                            Sort By
                        </button>
                        <button className="shadow-md font-semibold text-sm p-1 rounded-xl mx-4 border border-gray-200  hover:bg-orange-400 "

                        >
                            Filter ::
                        </button>

                    </div>
                </div>
                <h1 className="mx-48 text-2xl font-semibold">Restaurants with online food delivery in Vadodara</h1>
                <div className="flex flex-row overflow-y-auto p-4 w-9/12 m-auto ">
                    {
                        filteredRestaurantTwo?.map((resturant) => (
                            <Link className="link" key={resturant.info.id}
                                to={"restaurant/" + resturant.info.id} >
                                <HorizontalCards resData={resturant} />
                            </Link>
                        ))
                    }
                </div>

                <h2 className="mx-48 text-2xl font-semibold"> Top Resturant in Vadodra</h2>
                <div className="flex flex-wrap px-40 ">
                    {
                        filteredRestaurant?.map((resturant) => (
                            <Link className="link" key={resturant.info.id}
                                to={"restaurant/" + resturant.info.id} >
                                <ResturantCard resData={resturant} />
                            </Link>
                        ))
                    }
                </div>
            </div>
        );
};

export default Body;