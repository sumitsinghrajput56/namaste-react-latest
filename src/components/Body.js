import { useContext, useEffect, useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  console.log("filteredRestaurant", filteredRestaurant);

  const {loggedInUser, setUserName}= useContext(UserContext);

  // whenever state variable update, react triggers a reconciliation cycle (re-renders the component)

  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9804517&lng=77.746281&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    // Optional Chaning
    // Install Cros Extensions
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // Conditional Rendering

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return (
      <div>
        <h1>
          Looks like you are offline!! Please check your internet connection;
        </h1>
      </div>
    );
  }
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            placeholder="Search Restaurants"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.5
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <label>UserName:</label>
          <input type="text" value={loggedInUser}  onChange={(e) => setUserName(e.target.value)} className="border border-black p-2"/>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurent) => (
          <Link
            key={restaurent.info.id}
            to={"/restaurants/" + restaurent.info.id}
          >
            {/* if the restaurants is promoted then add promoted label to it  */}
            {restaurent.info.availability.opened ? (
              <RestaurantCardPromoted resData={restaurent} />
            ) : (
              <RestaurantCard resData={restaurent} />
            )}
          </Link>
        ))}
        {/* <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" />  */}
      </div>
    </div>
  );
};

export default Body;
