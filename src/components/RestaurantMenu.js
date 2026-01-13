import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] =useState(0);
  const { restId } = useParams();

  const resInfo = useRestaurantMenu(restId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.card[0]?.card?.card?.info;

  const itemCards =
    resInfo?.card?.[2]?.groupCard?.cardsGroupMap?.REGULAR?.cards?.[1]?.card
      ?.card?.itemCards || [];

  const categories =
    resInfo?.card?.[2]?.groupCard?.cardsGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      {/* categories accordians  */}
      {
        categories.map((category, index) => {
          return (
            <RestaurantCategory data={category?.card?.card } key={category?.card?.card?.title} showItems={index == showIndex ? true : false} setShowIndex={() => setShowIndex(index)}/>
          )
        })
      }

    </div>
  );
};

export default RestaurantMenu;
