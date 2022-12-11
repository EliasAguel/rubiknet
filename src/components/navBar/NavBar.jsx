import "./Navbar.css";

import {Link} from "react-router-dom"

import { CartWidget } from "../cartWidget/CartWidget";

const NavBar = () => {


  return (
    <div className="navbar-container">
      <div className="container-logo">
        <Link to="/">
        <img
          className="logo-navbar"
          src="https://res.cloudinary.com/doqlckxmr/image/upload/v1669687419/logo_fy1t5d.png"
          alt=""
          />
          </Link>
      </div>
      <ul className="navbar">
        <Link className="navbar-item" to="/" ><p>INICIO</p></Link>
        <Link className="navbar-item" to="/category/rubik" ><p>CUBOS RUBIK`S</p></Link>
        <Link className="navbar-item" to="/category/gan" ><p>CUBOS GAN</p></Link>
        <Link className="navbar-item" to="/category/otros" ><p>OTROS CUBOS</p></Link>
      </ul>
      <CartWidget />
    </div>
  );
};

export default NavBar;
