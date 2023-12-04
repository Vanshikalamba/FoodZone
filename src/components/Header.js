import { LOGO_URL } from "../utils/constant";
const Header = () => {
  return (
    <div className="Header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Account</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
