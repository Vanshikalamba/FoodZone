import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
//import resObj from "../utils/mockData";
import resList from "../utils/dummyData";
//only let can be updated not const
const Body = () => {
  const [listRes, setlistRes] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const res = await data.json();
    console.log(res);
    //optional chaining
    setlistRes(
      res.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }; //res.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
  if (listRes.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filterbtn"
          onClick={() => {
            //filter

            const filteredList = listRes.filter(
              (res) => res.info.avgRating > 4.2
            );
            setlistRes(filteredList);
            console.log(listRes);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listRes.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
