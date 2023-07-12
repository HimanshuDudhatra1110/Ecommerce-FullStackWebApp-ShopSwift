import React from "react";
import { NavLink, Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { HiShoppingCart } from "react-icons/hi";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to={ROUTES.HOMEPAGE} className="navbar-brand">
              <HiShoppingCart />
              ShopSwift
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to={ROUTES.HOMEPAGE} className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={ROUTES.CATEGORY} className="nav-link">
                  Category
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={ROUTES.REGISTER} className="nav-link">
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={ROUTES.LOGIN} className="nav-link">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={ROUTES.CART} className="nav-link">
                  Cart (0)
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
