import React from "react";
import { NavLink } from 'react-router-dom';


const Nav = () => {
   
  return (
    <nav className ="main-nav">
                         <ul>
                                <li>
                                        <NavLink exact to='/search'> Home </NavLink>
                                </li>
                                <li>
                                        <NavLink to="/gucci">gucci</NavLink>
                                </li>
                                <li>
                                        <NavLink to="/lamborghini">lamborghini</NavLink>
                                </li>
                                <li>    
                                        <NavLink to="/technology">technology</NavLink>
                                </li>
                         </ul>
    </nav>
  );
};

 export default Nav;