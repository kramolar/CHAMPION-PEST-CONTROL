import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import company_logo from "../assets/company-logo.svg";
import hamburger from "../assets/hamburger.png";

export const Appbar = () => {
  const location = useLocation();
  const [dropdown, setDropdown] = useState(false);
  const isHome = location.pathname === "/our-story";
  const isServices = location.pathname === "/services";
  const isContactUs = location.pathname === "/contact-us";

  return (
    <div>
      <div className="bg-black-shade flex items-center justify-between md:p-4  fixed top-0 w-full z-50">
        <div className="ml-2 flex items-center">
          <div className=" h-10 w-10 md:h-14 md:w-14">
            <Link to="/ ">{<img src={company_logo}></img>}</Link>
          </div>
          <Link to="/ ">
            <div className="mx-2   md:mx-3 text-xl md:text-3xl font-normal font-monteserrat font-semibold text-letter-color ">
              CHAMPION
            </div>
          </Link>
        </div>

        <div className="flex items-center">
          <div className="relative">
            <div>
              <div className="mt-3 mb-3 w-8  rounded-md bg-letter-color block lg:hidden mr-4">
                <img
                  src={hamburger}
                  onClick={() => setDropdown(!dropdown)}
                  alt="Hamburger Menu"
                />
              </div>
              <div
                className={`absolute right-4 w-48 rounded-md shadow-lg bg-black-shade ring-1 ring-letter-color ${
                  dropdown ? "block" : "hidden"
                }`}
              >
                <div className="py-1">
                  <Link
                    to="/"
                    className="block px-4 py-2 text-sm text-letter-color hover:text-grey-shade"
                    onClick={() => setDropdown(false)}
                  >
                    Home
                  </Link>
                  <Link
                    to="/pest-library"
                    className="block px-4 py-2 text-sm text-letter-color hover:text-grey-shade"
                    onClick={() => setDropdown(false)}
                  >
                    Pest Library
                  </Link>
                  <Link
                    to="/services"
                    className="block px-4 py-2 text-sm text-letter-color hover:text-grey-shade"
                    onClick={() => setDropdown(false)}
                  >
                    Services
                  </Link>
                  <Link
                    to="/contact-us"
                    className="block px-4 py-2 text-sm text-letter-color hover:text-grey-shade"
                    onClick={() => setDropdown(false)}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`text-letter-color hover:underline ${
              isHome ? "underline" : ""
            } text-2xl font-normal font-abel hidden lg:block`}
          >
            <Link to="/">Home</Link>
          </div>
          <div
            className={`text-letter-color hover:underline ${
              isServices ? "underline" : ""
            } text-xl md:text-2xl font-normal font-abel ml-10 hidden lg:block`}
          >
            <Link to="/services">Services</Link>
          </div>
          <div
            className={`text-letter-color hover:underline ${
              isServices ? "underline" : ""
            }  text-2xl font-normal font-abel ml-10 hidden lg:block`}
          >
            <Link to="/pest-library">Pest Library</Link>
          </div>
          <div
            className={`text-letter-color hover:underline ${
              isContactUs ? "underline" : ""
            } text-2xl font-normal font-abel ml-10 hidden lg:block mr-4`}
          >
            <Link to="/contact-us">Contact Us</Link>
          </div>
        </div>
      </div>
      <div className="mt-10 md:mt-24"></div>
    </div>
  );
};
