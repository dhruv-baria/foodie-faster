import { RES_URL } from "./utiles/constants";

const HorizontalCards = (props) => {
    const { resData } = props;

    return (
        <div className="m-4 p-4 w-[250px] cursor-pointer hover:scale-105">
            <img alt="" className="rounded-full shadow-lg size-40 w-40   "  src={RES_URL + resData.info.cloudinaryImageId} />
            <h3 className="font-bold py-2 text-lg text-gray-600">{resData.info.name}</h3>
            <h5>{resData.info.avgRating} &#x2605; Rating</h5>
            <h4 className="text-gray-600">{resData.info.cuisines.join(", ")}</h4>
            <h4 className="text-gray-500">{resData.info.areaName}</h4>
            <h3>{resData.info.deliveryTime}</h3>
        </div>
    );
};

export default HorizontalCards;