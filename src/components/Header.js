import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
const Header = () => {
  //let signinbtn = "Login";
  const [signInBtn, setSignInBtn] = useState("Login");
  console.log("Header rendered");
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
          <button
            className="login-btn"
            onClick={() => {
              signInBtn === "Login"
                ? setSignInBtn("Logout")
                : setSignInBtn("Login");
              console.log(signInBtn);
            }}
          >
            {signInBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
