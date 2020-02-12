import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => (
  <div className="NavbarWrapper">
    <ul style={{ display: "flex", justifyContent: "space-between" }}>
        <li>
            <Link to="/" >Home</Link>
        </li>
        <li>
        <Link to="/product" >product</Link>
        </li>
        <li>
        <Link to="/contact" >contact</Link>
        </li>
    </ul>
  </div>
);

export default Navbar;
