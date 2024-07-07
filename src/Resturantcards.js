import { RES_URL } from "./utiles/constants";

const ResturantCard = (props) => {
    const { resData } = props;

    return (
        <div className="m-4 p-4 w-[250px] cursor-pointer hover:scale-105">
            <div className="relative  ">
            <img alt="" className="rounded-xl size-40 w-72 [box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset]" src={RES_URL + resData.info.cloudinaryImageId} />
            <div className="absolute inset-0 flex font-extrabold text-white mx-2 items-end text-xl">
            <h2 className="[text-shadow:_0_1px_0_rgb(0_0_0_/_70%)]">{resData.info.costForTwo}</h2>
            </div>
            </div>
            <h3 className="font-bold text-lg text-gray-600">{resData.info.name}</h3>
            <h5>{resData.info.avgRating} &#x2605; Rating</h5>
            <h4 className="text-gray-600">{resData.info.cuisines.join(", ")}</h4>
            <h4 className="text-gray-600"> {resData.info.areaName}</h4>
            <h3>{resData.info.deliveryTime}</h3>
        </div>
    );
};

export default ResturantCard;