import React from "react";
import { Link, useLocation } from "react-router-dom";
import company_logo from "../assets/company-logo.svg";

export const Appbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/our-story";
  const isServices = location.pathname === "/services";
  const isContactUs = location.pathname === "/contact-us";

  return (
    <div>
      <div className="bg-black-shade flex items-center justify-between p-4 fixed top-0 w-full z-50">
        <div className="flex items-center">
          <div className="h-14 w-14">
            <Link to="/ ">{<img src={company_logo}></img>}</Link>
          </div>
          <Link to="/ ">
            <div className="mx-4 text-3xl font-normal font-monteserrat font-semibold text-letter-color ">
              CHAMPION
            </div>
          </Link>
        </div>
        <div className="flex items-center">
          <div
            className={`text-letter-color hover:underline ${
              isHome ? "underline" : ""
            } text-2xl font-normal font-abel hidden md:block`}
          >
            <Link to="/">Home</Link>
          </div>
          <div
            className={`text-letter-color hover:underline ${
              isServices ? "underline" : ""
            } text-2xl font-normal font-abel ml-10 hidden md:block`}
          >
            <Link to="/services">Services</Link>
          </div>
          <div
            className={`text-letter-color hover:underline ${
              isContactUs ? "underline" : ""
            } text-2xl font-normal font-abel ml-10 mr-4`}
          >
            <Link to="/contact-us">Contact Us</Link>
          </div>
        </div>
      </div>
      <div className="mt-24"></div>
    </div>
  );
};
