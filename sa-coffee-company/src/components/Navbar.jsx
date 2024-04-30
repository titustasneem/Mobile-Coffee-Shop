import React from "react";
import { useState } from "react";
import { PiCoffee } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = ({ setState }) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const NavbBarSections = ["Home", "Our Story", "Booking", "Contact", "Products"];
  return (
    <nav className="navigation">
      <a href="#" onClick={() => setState("")} className="Logo">
        SA Coffee Company <PiCoffee />{" "}
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <RxHamburgerMenu />
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          {NavbBarSections.map((section) => {
            return (
              <li>
                <a href="#" onClick={() => setState(section)}>
                  {section}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      {/* <a href="#" className="btn">
        Book an event
      </a> */}
    </nav>
  );
};

export default Navbar;
