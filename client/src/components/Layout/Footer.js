import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const Footer = () => {
  return (
    <div className="footer">
      <h4 className="text-center">All Right Reserved &copy; Himanshu</h4>
      <p className="text-center mt-3">
        <Link to={ROUTES.ABOUT}>About</Link>|
        <Link to={ROUTES.CONTACT}>Contact</Link>|
        <Link to={ROUTES.POLICY}>Privacy Policy</Link>
      </p>
    </div>
  );
};

export default Footer;
