import React from 'react';
import { NavLink } from 'react-router-dom';


const NavLinks = (props) => {
  const animateFrom = {opacity: 0, y: -40}
  const animateTo = {opacity: 1, y: 0}
  return (
    <ul className="menu-items" initial={animateFrom} animate={animateTo} transition={{delay: 0.05}}>
            <li
              initial={animateFrom}
              animate={animateTo}
              transition={{delay: 0.05}}
              onClick={() => props.isMobile && props.closeMobileMenu()}
              >
                <NavLink to="/" className="active-links">Home</NavLink>
              </li>
            <li
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.10}}
            onClick={() => props.isMobile && props.closeMobileMenu()}
            >
              <NavLink to="#">About</NavLink>
            </li>
            <li
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.15}}
            onClick={() => props.isMobile && props.closeMobileMenu()}
            >
              <NavLink to="#">Menu</NavLink>
            </li>
            <li
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.20}}
            onClick={() => props.isMobile && props.closeMobileMenu()}
            >
              <NavLink to="/reservations" className="active-links">Reservations</NavLink>
            </li>
            <li
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.25}}
            onClick={() => props.isMobile && props.closeMobileMenu()}
            >
              <NavLink to="#">Order Online</NavLink>
            </li>
            <li
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.30}}
            onClick={() => props.isMobile && props.closeMobileMenu()}
            >
              <NavLink to="#">Login</NavLink>
            </li>
            <li
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.35}}
            onClick={() => props.isMobile && props.closeMobileMenu()}
            className="donate"
            >
              <NavLink to="#">Donate</NavLink>
            </li>
        </ul>
  )
}

export default NavLinks