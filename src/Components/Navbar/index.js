import React from 'react';
import { Nav, NavLink, NavIcon, Bars, PizzaBtn } from './NavbarElements';
import PopUp from '../PopUp';
const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to='/'>Pizza</NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
        <PizzaBtn onClick={PopUp}>order pizza!</PizzaBtn>
      </Nav>
    </>
  );
};

export default Navbar;