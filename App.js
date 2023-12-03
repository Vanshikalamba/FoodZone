import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 * -Logo
 * -Other items
 * Body
 * -search
 * -Restaurantcontainer
 * -Restaurantcard
 * Footer
 * -copyright
 * -links
 * -address
 * -contact
 *
 */
const AppLayout = () => {
  return <div className="app"></div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComp />);
