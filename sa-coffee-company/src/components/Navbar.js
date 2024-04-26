import React from 'react'
import { useState } from "react"
import { PiCoffee} from 'react-icons/pi';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {

  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
      <a href="#" className='Logo'>SA Coffee Company <PiCoffee/> </a>
      <button className="hamburger"  onClick={() => {setIsNavExpanded(!isNavExpanded)}} >
        <RxHamburgerMenu/>
      </button>
      <div
        className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Book</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <a href="#" className='btn'>Book an event</a>
    </nav>
  )
}

export default Navbar