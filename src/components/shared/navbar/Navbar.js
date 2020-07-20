import React from 'react';
import { Link } from 'react-router-dom';
function Navbar(){
    return(
        <nav id="navbar" className="nav">
        <ul className="nav-list">
          <li>
                <Link to="/">
                </Link>
          </li>
          <li><Link to="/SecondPage">Work</Link></li>
          <li>
           <Link to="/ThirdPage">Contact</Link>
          </li>
          <li>
            <a href="#contact">Help</a>
          </li>
        </ul>
      </nav>
    )
}
export default Navbar;