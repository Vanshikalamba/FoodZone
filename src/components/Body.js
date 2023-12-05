import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
//import resObj from "../utils/mockData";
import resList from "../utils/dummyData";
//only let can be updated not const
const Body = () => {
  const [listRes, setlistRes] = useState(resList);

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
