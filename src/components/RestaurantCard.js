import { CDN_URL } from "../utils/constant";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  //console.log(props); //props is a js object
  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL + cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h5>{avgRating} stars</h5>
      <h5>{costForTwo}</h5>
      <h5>{sla.deliveryTime} mins</h5>
    </div>
  );
};

export default RestaurantCard;
