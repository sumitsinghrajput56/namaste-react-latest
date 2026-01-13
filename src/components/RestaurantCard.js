import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/userContext";

const RestaurantCard = (props) => {
    const {resData} = props;

  const {name, cuisines, avgRating, costForTwo, cloudinaryImageId } = resData?.info;
  const {deliveryTime} = resData?.info?.sla;

  const {loggedInUser} = useContext(UserContext);

  return (
    <div
      className="m-4 p-4 w-[200px] rounded-lg bg-gray-100 hover:bg-gray-300"
    >
      <img
        className="rounded-lg"
        alt="res-logo"
        src={
          CDN_URL +
          cloudinaryImageId
        }
      />
      <p className="font-bold py-2 text-lg">{name}</p>
      <p>{cuisines.join(", ")}</p>
      <p>{avgRating} Star</p>
      <p>{costForTwo}</p>
      <p>{deliveryTime} Min</p>
      <p>User: {loggedInUser}</p>
    </div>
  );

};

// Higher Order Component 

// input - RestaurantCard - RestaurantCardPromated 

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute  bg-black text-white m-2 p-2 rounded-lg">
          Open
        </label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}

export default RestaurantCard;